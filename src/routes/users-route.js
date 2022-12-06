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
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     description: ''
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *     security:
 *       - bearerAuth: []
 *   post:
 *     tags:
 *       - Users
 *     description: 'Add user'
 *
 */

router.get('/', permissionAuthorization('read'), usersController.getAll);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     description: ''
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ''
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: Not found
 *     security:
 *       - bearerAuth: []
 */
router.get('/:id', usersController.getById);

/**
 * @swagger
 * /users/get-by-username:
 *   post:
 *     tags:
 *       - Users
 *     description: ''
 *     requestBody:
 *         description: Login with username and password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: administrator
 *         required: true
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: Not found
 *     security:
 *       - bearerAuth: []
 */
router.post('/get-by-username', usersController.getByUsername);

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - Users
 *     description: Add user
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *     security:
 *       - bearerAuth: []
 */
router.post('/', usersController.Add);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags:
 *       - Users
 *     description: Edit user
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ''
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *     security:
 *       - bearerAuth: []
 */
router.put('/:id', usersController.Edit);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Edit user
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ''
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id', usersController.Delete);

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

module.exports = router;
