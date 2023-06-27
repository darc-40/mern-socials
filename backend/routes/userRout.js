const express = require('express');
const { register, login } = require('../controllers/userControler')
const { userVerification } =  require('../middlawares/authMidleware')

const router = express.Router();

// posting route logic
router.post('/signup', register);
// the login route
router.post('/signin', login)

// router to verify acces
router.post('/', userVerification)

module.exports = router