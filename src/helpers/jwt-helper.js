require('dotenv').config();
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const redisConnection = require('./redis-connection');


class TokenHelper {
    constructor() {
        this.accessTokenSecret = process.env.ACCESS_TOKEN_SECRET_KEY;
        this.refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET_KEY;
    }

    async signAccessToken(userId) {
        return new Promise((resolve, reject) => {
            const payload = {
                userId
            };

            const options = {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRED || '5m',
            };

            jwt.sign(payload, this.accessTokenSecret, options, (error, token) => {
                if (error) reject(error);
                resolve(token);
            });
        })
    }

    async verifyAccessToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.accessTokenSecret, (error, payload) => {
                if (error) reject(error);
                resolve(payload);
            });
        })
    }

    async signRefreshToken(userId) {
        return new Promise((resolve, reject) => {
            let refreshTokenExpired = process.env.REFRESH_TOKEN_EXPIRED || '30d';
            let refreshTokenExpiredRedis = Number(refreshTokenExpired.substring(0, refreshTokenExpired.length - 2)) * 24 * 60 * 60 || 2592000

            const payload = {
                userId
            };

            const options = {
                expiresIn: refreshTokenExpired,
            };

            jwt.sign(payload, this.refreshTokenSecret, options, (error, token) => {
                if (error) reject(error);

                redisConnection.setValueExpired(userId, token, refreshTokenExpiredRedis)
                    .then(result => {
                        resolve(token);
                    }).catch(err => {
                        reject(err);
                    })
            });
        })
    }

    async verifyRefreshToken(refreshToken) {
        return new Promise((resolve, reject) => {
            jwt.verify(refreshToken, this.refreshTokenSecret, (error, payload) => {
                if (error) reject(error);

                redisConnection.getValue(payload.userId)
                    .then(result => {
                        if(result == refreshToken) resolve(payload);
                        else reject(new Error("Refresh token does not exists in database."));
                    })
                    .catch(err => reject(err));
            });
        })
    }
}

module.exports = new TokenHelper();