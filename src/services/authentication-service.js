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
                return user;
            } else {
                return null;
            }
        }
    }

    async refreshToken(refreshToken) {
        let { userId } = await jwtHelper.verifyRefreshToken(refreshToken);

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
