require('dotenv').config();
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const jwtHelper = require('../helpers/jwt-helper');

const authMiddleware = async (req, res, next) => {
    if (!req.headers['authorization']) return next(createError.Unauthorized());

    let authHeader = req.headers['authorization'];
    let bearerToken = authHeader.split(' ');
    let token = bearerToken[1];

    try {
        let payload = await jwtHelper.veryfyAccessToken(token);
        req.payload = payload;
        return next();
    } catch (error) {
        return next(createError.Unauthorized(error));
    }
}

module.exports = authMiddleware;