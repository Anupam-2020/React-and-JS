const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = asyncHandler(async (req, resp) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        throw new Error('All fields are required');
    }
    const userAvailabile = await userModel.findOne({email});

    if(userAvailabile) {
        resp.status(400);
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username, email, password: hashedPassword
    })

    resp.status(201).json({_id: user._id, email: user.email})
})


const loginUser = asyncHandler(async (req, resp) => {
    const {email, password} = req.body;
    if(!email || !password) {
        resp.status(400);
        throw new Error('All fields are required');
    }

    const user = await userModel.findOne({email});
    // compare password wiuth hashed password.
    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user._id
            }
        }, process.env.ACCESS_TOKEN_SECRET, 
        {expiresIn: '1h'}
    )
    resp.status(200).json({accessToken});
    } else {
        resp.status(401)
        throw new Error('Invalid email or password');
    }
})


const currentUserInformation = asyncHandler(async (req, resp) => {
    resp.json(req.user);
})


module.exports = {
    registerUser,
    loginUser,
    currentUserInformation
}