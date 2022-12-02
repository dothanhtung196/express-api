var express = require('express');
const menuController = require('../controllers/menu-controller');
var router = express.Router();

/* GET home page. */
router.get('/:id', menuController.getByRoleId);

module.exports = router;