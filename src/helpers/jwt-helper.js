require('dotenv').config();
const jwt = require('jsonwebtoken');
const redisConnection = require('./redis-connection');


class JwtHelper {
    constructor() {
        this.accessTokenSecret = process.env.ACCESS_TOKEN_SECRET_KEY;
        this.refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET_KEY;
    }

    async signAccessToken(claim) {
        const payload = Object.assign(claim);

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

    async signRefreshToken(claim) {
        let refreshTokenExpired = process.env.REFRESH_TOKEN_EXPIRED || '30d';

        const payload = Object.assign(claim);

        const options = {
            expiresIn: refreshTokenExpired,
        };

        try {
            let token = await this.signAsync(payload, this.refreshTokenSecret, options);
            return token;
        } catch (error) {
            throw new Error(error);
        }
    }

    async verifyRefreshToken(refreshToken) {
        try {
            let payload = await this.verifyAsync(refreshToken, this.refreshTokenSecret);
            return payload;
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