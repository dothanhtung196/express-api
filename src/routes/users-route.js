var express = require('express');
var userController = require('../controllers/user-controller');
const authMiddleware = require('../middleware/auth-middleware');

var router = express.Router();
router.use(authMiddleware);

router.get('/', userController.getAll);
router.get('/:id', userController.getById)
router.get('/get-by-username', userController.getByUsername);
router.post('/', userController.Add);
router.put('/:id', userController.Edit);
router.delete('/:id', userController.Delete);

module.exports = router;
