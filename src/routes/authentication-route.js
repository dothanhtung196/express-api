var express = require('express');
var router = express.Router();
var authenticationsController = require('../controllers/authentications-controller');
const authMiddleware = require('../middleware/auth-middleware');
const roleAuthorization = require('../middleware/role-authorization');

router.post('/register', authenticationsController.register);
router.post('/login', authenticationsController.login);
router.post('/refresh-token', authenticationsController.refreshToken);
router.post('/logout', authMiddleware, authenticationsController.logout);

module.exports = router;