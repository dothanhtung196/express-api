var express = require('express');
var router = express.Router();
var userController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');

/* GET users listing. */
router.get('/', authMiddleware, userController.getAll);
router.get('/get-by-username', userController.getByUsername);
router.post('/', userController.Add);
router.put('/:id', userController.Edit);
router.delete('/:id', userController.Delete);

module.exports = router;
