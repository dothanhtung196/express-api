const createError = require('http-errors');
const rolePermissionService = require('../services/role-permission-service');
const userService = require('../services/user-service');
const roleService = require('../services/role-service');

const permissionAuthorization = (parameters) => {
    return async (req, res, next) => {
        if (parameters.length == 0) throw new Error("Permission parameter is undefined.");

        try {
            let { userId } = req.payload;

            let user = await userService.getById(userId);
            if(!user) throw new Error("Can not get user from database");

            let role = await roleService.getRoleByUserId(userId);
            if (!role) throw new Error("Can not get role from database");

            let permissionIds = (await rolePermissionService.getByRoleId(role.id)).map(x => (x.permissionId));
            console.log('-----------------', req.baseUrl);
            return next();
        } catch (error) {
            return next(createError.Unauthorized(error.message));
        }
    }
}

module.exports = permissionAuthorization;