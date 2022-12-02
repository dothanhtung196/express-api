require('dotenv').config();
const createError = require('http-errors');
const jwtHelper = require('../helpers/jwt-helper');
const redisConnection = require('../helpers/redis-connection');

const authMiddleware = async (req, res, next) => {
    if (!req.headers['authorization']) return next(createError.Unauthorized());

    let authHeader = req.headers['authorization'];
    let bearerToken = authHeader.split(' ');
    let token = bearerToken[1];

    try {
        let payload = await jwtHelper.verifyAccessToken(token);
        req.payload = payload;
        return next();
    } catch (error) {

        let { userId } = jwtHelper.decode(token);
        let accessTokenOld = await redisConnection.getValue(`AccessTokenOld-${userId}`);

        if(accessTokenOld == token){
            await redisConnection.removeValue(`RefreshToken-${userId}`);
        }else{
            await redisConnection.setValueExpired(`AccessTokenOld-${userId}`, token, 2592000);
        }
        return next(createError.Unauthorized(error.message));
    }
}

module.exports = authMiddleware;