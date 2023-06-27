const express = require('express');
const { register } = require('../controllers/userControler')

const router = express.Router();

// posting route logic
router.post('/signup', register);

module.exports = router