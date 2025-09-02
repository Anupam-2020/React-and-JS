const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc Get all contacts.
//@route GET /api/contacts
//@access Public
const getContact = asyncHandler(async (req, resp) => {
    const contacts = await Contact.find();
    resp.status(200).json(contacts);
    // resp.status(200).json({
    //     message: "Get all contacts"
    // })
})

//@desc Create new contact.
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (req, resp) => {
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        resp.status(400)
        throw new Error("Name, email and phone are required");
    }

    const contact = await Contact.create({
        name, email, phone
    })
    resp.status(201).json(contact);
    // resp.status(201).json({
    //     message: "Create Contact from controller"
    // })
})

//@desc Update contact.
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, resp, next) => {
    const contact = await Contact.findById(req.params.id);

    if(contact === undefined || contact === null) {
        resp.status(404);
        throw new Error("Contact not found");
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
//@access Public
const deleteContact = asyncHandler(async (req, resp, next) => {
    const contact = await Contact.findById(req.params.id);
    if(contact === undefined || contact === null) {
        resp.status(404);
        throw new Error("Contact not found");
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
//@access Public
const getSingleContact = asyncHandler(async (req, resp) => {
    const contact = await Contact.findById(req.params.id);
    console.log(contact);
    if(contact === undefined || contact === null) {
        resp.status(404);
        throw new Error("Contact not found");
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