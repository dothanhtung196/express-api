var express = require('express');
const roleController = require('../controllers/role-controller');
const authMiddleware = require('../middleware/auth-middleware');

var router = express.Router();

router.use(authMiddleware);

router.get('/', roleController.getAll);
router.get('/:id', roleController.getById);
router.post('/', roleController.add);
router.put('/:id', roleController.edit);
router.delete('/:id', roleController.delete);

module.exports = router;