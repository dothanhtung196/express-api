var express = require('express');
var router = express.Router();
var authenticationController = require('../controllers/authentication-controller');

router.post('/register', authenticationController.register);
router.post('/login', authenticationController.login);

module.exports = router;