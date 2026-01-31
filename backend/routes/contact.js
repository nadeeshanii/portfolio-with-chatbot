const express = require('express');
const router = express.Router();
const {
  submitContact,
  getAllContacts,
  deleteContact
} = require('../controllers/contactController');

// Public route
router.post('/', submitContact);

// Admin routes (add authentication middleware as needed)
router.get('/', getAllContacts);
router.delete('/:id', deleteContact);

module.exports = router;
