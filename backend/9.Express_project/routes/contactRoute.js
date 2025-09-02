const express = require('express');
const router = express.Router();
const {getContact, createContact, updateContact, deleteContact, getSingleContact} = require('../controllers/contactController');

// M-1..................................................................................
// router.route('/').get(getContact)
// router.route('/').post(createContact)
// router.route("/:id").put(updateContact)
// router.route("/:id").delete(deleteContact)
// router.route("/:id").get(getSingleContact)

// M-2(Shortcut)..................................................................................
router.route('/').get(getContact).post(createContact);
router.route('/:id').get(getSingleContact).put(updateContact).delete(deleteContact);

module.exports = router;