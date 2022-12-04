var express = require('express');
var usersController = require('../controllers/users-controller');
const authMiddleware = require('../middleware/auth-middleware');
const permissionAuthorization = require('../middleware/permission-authorization');
const roleAuthorization = require('../middleware/role-authorization');

var router = express.Router();
router.use(authMiddleware);

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Users
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           example: 1
 *         username:
 *           type: string
 *           example: administrator
 *         password:
 *           type: string
 *         fullName:
 *           type: string
 *           example: Do Thanh Tung
 *         phone:
 *           type: string
 *           example: 0987654321
 *         email:
 *           type: string
 *           example: 'admin@admin.com'
 *         address:
 *           type: string
 *           example: 'Tp HCM'
 *         statusId:
 *           type: integer
 *           description: User Status
 *           format: int32
 *           example: 1
 *         deleteFlag:
 *           type: integer
 *           format: int64
 *           example: 1
 *         createdBy:
 *           type: integer
 *           format: int64
 *           example: 0
 *         updatedBy:
 *           type: integer
 *           format: int64
 *           example: 0
 */

router.get('/', permissionAuthorization('read'), usersController.getAll);
router.get('/:id', usersController.getById)
router.get('/get-by-username', usersController.getByUsername);
router.post('/', usersController.Add);
router.put('/:id', usersController.Edit);
router.delete('/:id', usersController.Delete);

module.exports = router;
