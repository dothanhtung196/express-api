var express = require('express');
const roleController = require('../controllers/role-controller');
var router = express.Router();

router.get('/', roleController.getAll);
router.get('/:id', roleController.getById);

module.exports = router;