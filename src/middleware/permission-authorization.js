const createError = require('http-errors');
const rolePermissionService = require('../services/role-permission-service');
const userService = require('../services/user-service');
const roleService = require('../services/role-service');
const permissionService = require('../services/permission-service');

const permissionAuthorization = (parameter) => {
    return async (req, res, next) => {
        if (!parameter) throw new Error("Permission parameter is undefined.");

        try {
            let { userId } = req.payload;
            let routeName = req.baseUrl.split('/')[1];

            let user = await userService.getById(userId);
            if (!user) throw new Error("Can not get user from database");

            let role = await roleService.getRoleByUserId(userId);
            if (!role) throw new Error("Can not get role from database");

            let permissionIds = (await rolePermissionService.getByRoleId(role.id)).map(x => (x.permissionId));
            let permissions = await permissionService.getByIds(permissionIds);

            let isPermission = permissions.some(x => x.code == parameter);

            if (isPermission) {
                return next();
            } else {
                throw createError.Unauthorized("User don't have permission.");
            }

        } catch (error) {
            return next(createError.Unauthorized(error.message));
        }
    }
}

module.exports = permissionAuthorization;