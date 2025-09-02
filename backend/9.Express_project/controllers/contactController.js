const asyncHandler = require('express-async-handler');

//@desc Get all contacts.
//@route GET /api/contacts
//@access Public
const getContact = asyncHandler(async (req, resp) => {
    resp.status(200).json({
        message: "Get all contacts"
    })
})

//@desc Create new contact.
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (req, resp) => {
    const {name, email} = req.body;
    if(!name || !email) {
        resp.status(400)
        throw new Error("Name and email are required");
    }
    resp.status(201).json({
        message: "Create Contact from controller"
    })
})

//@desc Update contact.
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, resp, next) => {
    const id = req.params.id;
    resp.status(200)
    resp.json({
        message: `Update contact with id ${id}`
    })
})

//@desc Delete contact.
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, resp, next) => {
    const id = req.params.id;
    resp.status(200)
    resp.json({
        message: `Delete contact with id ${id}`
    })
})

//@desc Get single contact.
//@route GET /api/contacts/:id
//@access Public
const getSingleContact = asyncHandler(async (req, resp) => {
    const id = req.params.id;
    resp.status(200).json({
        message: `Get contact with id ${id}`
    })
})

module.exports = {
    getContact,
    createContact,
    updateContact,
    deleteContact,
    getSingleContact
}