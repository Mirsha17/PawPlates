const express = require('express');
const { createUser, getUsers } = require('../Controllers/UserController');
const router = express.Router();

// Create a new user
router.post('/users', createUser);

// Get all users
router.get('/users', getUsers);

module.exports = router;
