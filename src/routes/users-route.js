var express = require('express');
var usersController = require('../controllers/users-controller');
const authMiddleware = require('../middleware/auth-middleware');
const permissionAuthorization = require('../middleware/permission-authorization');
const roleAuthorization = require('../middleware/role-authorization');

var router = express.Router();
router.use(authMiddleware);

router.get('/', permissionAuthorization(['Users.Get']), usersController.getAll);
router.get('/:id', usersController.getById)
router.get('/get-by-username', usersController.getByUsername);
router.post('/', usersController.Add);
router.put('/:id', usersController.Edit);
router.delete('/:id', usersController.Delete);

module.exports = router;
