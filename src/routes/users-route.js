var express = require('express');
var router = express.Router();
var userController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');

/* GET users listing. */
router.use(authMiddleware);

router.get('/', userController.getAll);
router.get('/:id', userController.getById)
router.get('/get-by-username', userController.getByUsername);
router.post('/', userController.Add);
router.put('/:id', userController.Edit);
router.delete('/:id', userController.Delete);

module.exports = router;
