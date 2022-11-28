const userRepository = require("../repositories/user-repository");
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
                user.refreshToken = await jwtHelper.signRefreshToken(user.id);
                return user;
            } else {
                return null
            };
        }
    }

    async refreshToken(refreshToken) {
        let { userId } = await jwtHelper.verifyRefreshToken(refreshToken);

        let user = await userRepository.GetById(userId);
        if(user){
            user.accessToken = await jwtHelper.signAccessToken(userId);
            user.refreshToken = await jwtHelper.signRefreshToken(userId);
            return user;
        }else{
            return null;
        }
    }

    async logout(){

    }
}

module.exports = new AuthenticationService();