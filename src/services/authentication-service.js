const userRepository = require("../repositories/user-repository");
const bcrypt = require('bcrypt');
const stringCipher = require('../helpers/string-cipher');
const jwtHelper = require("../helpers/jwt-helper");

class AuthenticationService {
    async register(request) {
        request.password = await stringCipher.hashPassword(request.password);
        return await userRepository.Add(request);
    }

    async login({ username, password }) {
        let user = await userRepository.getByUsername(username);
        if (user) {
            let isPasswordCheck = await stringCipher.comparePassword(password, user.password);

            if (isPasswordCheck) {
                delete user.password;
                user.accessToken = await jwtHelper.signAccessToken(user.id);
                user.refreshToken = await jwtHelper.asignRefreshToken(user.id);
                return user;
            } else {
                return null
            };
        }
    }
}

module.exports = new AuthenticationService();