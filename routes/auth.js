//import
const express = require('express')
const { registerUser, loginUser } = require('../controllers/authController')
const router = express.Router();

//user registration
router.post('/register', registerUser);

//user login 
router.post('/login', loginUser);

module.exports = router;
