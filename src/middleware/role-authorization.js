const createError = require('http-errors');

const permissionMiddleware = (req, res, next) => {
    if (!req.headers['authorization']) return next(createError.Unauthorized());

    let authHeader = req.headers['authorization'];
    let bearerToken = authHeader.split(' ');
    let token = bearerToken[1];

    try {

    } catch (error) {
        return next(createError.Unauthorized(error.message));
    }
}

module.exports = permissionMiddleware;