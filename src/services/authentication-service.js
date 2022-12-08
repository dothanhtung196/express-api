require('dotenv').config();
const userRepository = require("../repositories/user-repository");
const stringCipher = require("../helpers/string-cipher");
const jwtHelper = require("../helpers/jwt-helper");
const redisConnection = require("../helpers/redis-connection");
const claimService = require("./claim-service");

class AuthenticationService {
    async register(request) {
        request.password = await stringCipher.hashPassword(request.password);
        return await userRepository.add(request);
    }

    async login({ username, password }) {
        let refreshTokenExpired = process.env.REFRESH_TOKEN_EXPIRED || '30d';
        let refreshTokenExpiredRedis = Number(refreshTokenExpired.substring(0, refreshTokenExpired.length - 2)) * 24 * 60 * 60 || 2592000;

        let user = await userRepository.getByUsername(username);
        if (user) {
            let isPasswordCheck = await stringCipher.comparePassword(password, user.password);

            if (isPasswordCheck) {
                delete user.password;

                let claim = {
                    userId: user.id,
                };

                let claims = await claimService.getByUserId(user.id);
                if (claims && claim.length > 0) {
                    claims.forEach((item) => {
                        claim[item.claimType] = item.claimValue;
                    });
                }

                user.accessToken = await jwtHelper.signAccessToken(claim);
                user.refreshToken = await jwtHelper.signRefreshToken(claim);

                await redisConnection.setValueExpired(`RefreshToken-${user.id}`, user.refreshToken, refreshTokenExpiredRedis);

                return user;
            } else {
                return null;
            }
        }
    }

    async refreshToken(refreshToken) {
        let payload = await jwtHelper.verifyRefreshToken(refreshToken);

        let tokenCache = await redisConnection.getValue(`RefreshToken-${payload.userId}`);
        if (tokenCache != refreshToken) {
            throw new Error("Refresh token does not exists in database.")
        }

        let { userId } = payload;

        let user = await userRepository.getById(userId);
        if (user) {
            let claim = {
                userId: user.id,
            };

            let claims = await claimService.getByUserId(user.id);
            if (claims && claim.length > 0) {
                claims.forEach((item) => {
                    claim[item.claimType] = item.claimValue;
                });
            }

            user.accessToken = await jwtHelper.signAccessToken(claim);
            user.refreshToken = await jwtHelper.signRefreshToken(claim);
            return user;
        } else {
            return null;
        }
    }

    async logout(refreshToken) {
        let { userId } = await jwtHelper.verifyRefreshToken(refreshToken);
        let result = await redisConnection.removeValue(`RefreshToken-${userId}`);
        return result;
    }
}

module.exports = new AuthenticationService();
