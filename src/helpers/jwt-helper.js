require('dotenv').config();
const jwt = require('jsonwebtoken');

class TokenHelper{
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
                expiresIn: process.env.ACCESS_TOKEN_EXPIRED,
            };

            jwt.sign(payload, this.accessTokenSecret, options, (error, token) => {
                if (error) reject(error);
                resolve(token);
            });
        })
    }

    async veryfyAccessToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.accessTokenSecret, (error, payload) => {
                if (error) reject(error);
                resolve(payload);
            });
        })
    }

    async asignRefreshToken(userId) {
        return new Promise((resolve, reject) => {
            const payload = {
                userId
            };

            const options = {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRED,
            };

            jwt.sign(payload, this.refreshTokenSecret, options, (error, token) => {
                if (error) reject(error);
                resolve(token);
            });
        })
    }
}

module.exports = new TokenHelper();