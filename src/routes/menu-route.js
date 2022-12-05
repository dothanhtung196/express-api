var express = require('express');
const menuController = require('../controllers/menu-controller');
var router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Menu
 *     description: Menu
*/

/* GET home page. */
router.get('/:id', menuController.getByRoleId);

module.exports = router;