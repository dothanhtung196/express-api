require('dotenv').config();
const jwt = require('jsonwebtoken');
const redisConnection = require('./redis-connection');


class JwtHelper {
    constructor() {
        this.accessTokenSecret = process.env.ACCESS_TOKEN_SECRET_KEY;
        this.refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET_KEY;
    }

    async signAccessToken(userId) {
        const payload = {
            userId
        };

        const options = {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRED || '5m',
        };

        try {
            let result = await this.signAsync(payload, this.accessTokenSecret, options);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async verifyAccessToken(token) {
        try {
            let result = await this.verifyAsync(token, this.accessTokenSecret);
            return result;
        } catch (error) {
            throw Error(error);
        }
    }

    async signRefreshToken(userId) {
        let refreshTokenExpired = process.env.REFRESH_TOKEN_EXPIRED || '30d';
        let refreshTokenExpiredRedis = Number(refreshTokenExpired.substring(0, refreshTokenExpired.length - 2)) * 24 * 60 * 60 || 2592000;

        const payload = {
            userId
        };

        const options = {
            expiresIn: refreshTokenExpired,
        };

        try {
            let token = await this.signAsync(payload, this.refreshTokenSecret, options);
            await redisConnection.setValueExpired(`RefreshToken-${userId}`, token, refreshTokenExpiredRedis);
            return token;
        } catch (error) {
            throw new Error(error);
        }
    }

    async verifyRefreshToken(refreshToken) {
        try {
            let payload = await this.verifyAsync(refreshToken, this.refreshTokenSecret);
            let tokenCache = await redisConnection.getValue(`RefreshToken-${payload.userId}`);
            if (tokenCache == refreshToken) return payload;
            else throw new Error("Refresh token does not exists in database.");
        } catch (error) {
            throw new Error(error);
        }
    }

    async signAsync(payload, secretKey, options) {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, secretKey, options, (error, token) => {
                if (error) reject(error);
                resolve(token);
            });
        });
    }

    async verifyAsync(token, secretKey) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secretKey, (error, payload) => {
                if (error) reject(error);
                resolve(payload);
            });
        })
    }

    decode(token){
        return jwt.decode(token);
    }
}

module.exports = new JwtHelper();