const express = require('express');
const { register, login, logout } = require('../controllers/userControler')
const { userVerification } =  require('../middlawares/authMidleware')

const router = express.Router();

// posting route logic
router.post('/signup', register);
// the login route
router.post('/signin', login)
// logout route
router.post('/logout', logout)

// router to verify acces
router.get('/userVerification', userVerification)

module.exports = router