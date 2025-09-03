const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc Get all contacts.
//@route GET /api/contacts
//@access Private
const getContact = asyncHandler(async (req, resp) => {
    const contacts = await Contact.find({ user_id: req.user.id});
    resp.status(200).json(contacts);
    // resp.status(200).json({
    //     message: "Get all contacts"
    // })
})

//@desc Create new contact.
//@route POST /api/contacts
//@access Private
const createContact = asyncHandler(async (req, resp) => {
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        resp.status(400)
        throw new Error("Name, email and phone are required");
    }

    const contact = await Contact.create({
        name, 
        email, 
        phone, 
        user_id: req.user.id
    })
    resp.status(201).json(contact);
    // resp.status(201).json({
    //     message: "Create Contact from controller"
    // })
})

//@desc Update contact.
//@route PUT /api/contacts/:id
//@access Private
const updateContact = asyncHandler(async (req, resp, next) => {
    const contact = await Contact.findById(req.params.id);

    if(contact === undefined || contact === null) {
        resp.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id) {
        resp.status(403);
        throw new Error("User don't have permission to update other user's contact");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    resp.status(200).json(updatedContact);

    // resp.status(200).json(contact);
    // const id = req.params.id;
    // resp.status(200).json({
    //     message: `Update contact with id ${id}`
    // })
})

//@desc Delete contact.
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, resp, next) => {
    const contact = await Contact.findById(req.params.id);
    if(contact === undefined || contact === null) {
        resp.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id) {
        resp.status(403);
        throw new Error("User don't have permission to delete other user's contact");
    }

    await Contact.deleteOne({_id: req.params.id});
    resp.status(200).json(contact);

    // const id = req.params.id;
    // resp.status(200)
    // resp.json({
    //     message: `Delete contact with id ${id}`
    // })
})

//@desc Get single contact.
//@route GET /api/contacts/:id
//@access Private
const getSingleContact = asyncHandler(async (req, resp) => {
    const contact = await Contact.findById(req.params.id);
    console.log(contact);
    if(contact === undefined || contact === null) {
        resp.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id) {
        resp.status(403);
        throw new Error("User don't have permission to access other user's contact");
    }

    resp.status(200).json(contact);
    // const id = req.params.id;
    // resp.status(200).json({
    //     message: `Get contact with id ${id}`
    // })
})

module.exports = {
    getContact,
    createContact,
    updateContact,
    deleteContact,
    getSingleContact
}