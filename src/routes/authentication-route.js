var express = require('express');
var router = express.Router();
var authenticationsController = require('../controllers/authentications-controller');
const authMiddleware = require('../middleware/auth-middleware');
const roleAuthorization = require('../middleware/role-authorization');


/**
 * @swagger
* tags:
*   - name: Authentications
*     description: Authentication
*/

router.post('/register', authenticationsController.register);

/**
 * @swagger
 * paths:
 *   /authentications/login:
 *     post:
 *       tags:
 *         - Authentications
 *       summary: 
 *       description: Login to system
 *       operationId: Login
 *       requestBody:
 *         description: Login with username and password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: administrator
 *                 password:
 *                   type: string
 *                   example: admin@123456
 *         required: true
 *       responses:
 *         '200':
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User' 
 *         '400':
 *           description: Invalid ID supplied
 *         '404':
 *           description: Pet not found
 *         '405':
 *           description: Validation exception
*/

router.post('/login', authenticationsController.login);

/**
 * @swagger
 * /authentications/refresh-token:
 *  post:
 *    tags:
 *      - Authentications
 *    description: Refresh Token
 *    requestBody:
 *      description: Refresh Token
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              refreshToken:
 *                type: string
 *    responses:
 *      '200':
 *        '400':
 *          description: Bad Request
 *        '404':
 *          description: User not found
 *        '405':
 *          description: Validation exception
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
*/
router.post('/refresh-token', authenticationsController.refreshToken);

/**
 * @swagger
 * /authentications/logout:
 *  post:
 *    tags:
 *      - Authentications
 *    description: ''
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              refreshToken:
 *                type: string
 *    responses:
 *      '200':
 *        description: OK
 */
router.post('/logout', authMiddleware, authenticationsController.logout);

module.exports = router;