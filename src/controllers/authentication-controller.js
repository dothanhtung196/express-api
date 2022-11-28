const createError = require('http-errors');
const authenticationService = require('../services/authentication-service');
const {authenticationValidate, refreshTokenValidate } = require('../validations/authentication-validate');
const userService = require('../services/user-service');

class AuthenticationController {
    async register(req, res, next) {
        try {
            let userExists = await userService.getByUsername(req.body.username);
            if (userExists) throw createError.Conflict("User does exists in database.");

            let result = await authenticationService.register(req.body);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const { error } = authenticationValidate.validate(req.body);
            if (error) throw createError.BadRequest(error.details[0].message);

            let result = await authenticationService.login(req.body);
            if (!result) throw createError.Unauthorized("Username or password not incorrect.");

            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async refreshToken(req, res, next) {
        try {
            let { refreshToken } = req.body;
            const { error } = refreshTokenValidate.validate(req.body);
            if (error) throw createError.BadRequest(error.details[0].message);

            let result = await authenticationService.refreshToken(refreshToken);
            if(!result) throw createError.Unauthorized("User dose not exists in database.");

            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async logout(req, res, next){
        res.json();
    }
}

module.exports = new AuthenticationController();