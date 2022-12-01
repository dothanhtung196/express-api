var express = require('express');
var router = express.Router();
var authenticationController = require('../controllers/authentication-controller');
const authMiddleware = require('../middleware/auth-middleware');

router.post('/register', authenticationController.register);
router.post('/login', authenticationController.login);
router.post('/refresh-token', authenticationController.refreshToken);
router.post('/logout', authMiddleware, authenticationController.logout);

module.exports = router;