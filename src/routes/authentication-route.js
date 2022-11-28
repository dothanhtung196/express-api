var express = require('express');
var router = express.Router();
var authenticationController = require('../controllers/authentication-controller');

router.post('/register', authenticationController.register);
router.post('/login', authenticationController.login);
router.post('/refresh-token', authenticationController.refreshToken);
router.post('/logout', authenticationController.logout)

module.exports = router;