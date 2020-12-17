const express = require('express');

const router = express.Router();

// @route GET api/contacts
// @desc Get all Users contacts
// @access Private

router.get('/', (req, res) => {
    res.send('Get all Contacts');
});

// @route POST api/contacts
// @desc Add new contacts
// @access Private

router.post('/', (req, res) => {
    res.send('Add Contacts');
});

// @route PUT api/contacts/:id
// @desc Update contacts
// @access Private

router.put('/:id', (req, res) => {
    res.send('Update Contacts');
});

// @route Delete api/contacts
// @desc Delete contacts
// @access Private

router.delete('/:id', (req, res) => {
    res.send('Delete Contacts');
});
module.exports = router;
