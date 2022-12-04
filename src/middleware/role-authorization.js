const createError = require('http-errors');
const roleService = require('../services/role-service');
const userService = require('../services/user-service');

const roleAuthorization = (parameters) => {
    return async (req, res, next) => {
        if (parameters.length == 0) throw new Error("Role parameter is undefined.");

        try {
            let { userId } = req.payload;

            let user = await userService.getById(userId);
            if(!user) throw new Error("Can not get user from database");

            let role = await roleService.getRoleByUserId(userId);

            if (!role) throw new Error("Can not get role from database");

            if (parameters.some(x => x == role.code)) {
                return next();
            } else {
                throw createError.Unauthorized("User don't have permission.");
            }
        } catch (error) {
            return next(createError.Unauthorized(error.message));
        }
    }
}

module.exports = roleAuthorization;