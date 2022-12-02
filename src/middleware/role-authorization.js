const createError = require('http-errors');
const roles = [{code: 'Admin'}, {ClipboardItem: 'User'}];

const roleAuthorization = (role) => {
    return async (req, res, next) => {
        console.log(role)
        // if(!role || !roles.some(x => x.code == role)) throw createError.Unauthorized("You don't have permission.");

        // if (!req.headers['authorization']) return next(createError.Unauthorized());

        // let authHeader = req.headers['authorization'];
        // let bearerToken = authHeader.split(' ');
        // let token = bearerToken[1];

        // try {
        //     let payload = await jwtHelper.verifyAccessToken(token);
        //     req.payload = payload;
        // } catch (error) {
        //     return next(createError.Unauthorized(error.message));
        // }
        next();
    }
}

module.exports = roleAuthorization;