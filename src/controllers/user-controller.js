const createError = require('http-errors');
const messageCustom = require('../helpers/message-custom');
const userService = require("../services/user-service");
const userValidate = require('../validations/user-validate');

class UserController
{
    async getAll(req, res, next) {
        try {
            let users = await userService.getAll();
            res.json(messageCustom.apiResponse(users));
        } catch (error) {
            next(error);
        }
    }

    async getByUsername(req, res, next) {
        try {
            let { username } = req.body;
            let user = await userService.getByUsername(username);

            if(!user) throw createError.NotFound("User does not exists.")
            res.json(messageCustom.apiResponse(user));
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            let { id } = req.params;
            let user = await userService.getById(id);

            if (!user) throw createError.NotFound("User does not exists.");
            res.json(messageCustom.apiResponse(user));
        } catch (error) {
            next(error);
        }
    }

    async Add(req, res, next) {
        try {
            let { error } = userValidate.validate(req.body, { abortEarly: false });
            if (error) throw createError.BadRequest(messageCustom.validate(error.details));

            let { username } = req.body;
            let userExists = await userService.getByUsername(username);
            if (userExists) throw createError.Conflict("User does exists in database.");

            let result = await userService.add(req.body);
            res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }

    async Edit(req, res, next) {
        try {
            let { error } = userValidate.validate(req.body, { abortEarly: false });
            if (error) throw createError.BadRequest(messageCustom.validate(error.details));

            let { id } = req.params;
            let user = await userService.getById(id);
            if (!user) throw createError.NotFound("User not exists in database.");

            let result = await userService.edit(id, req.body);
            return res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }

    async Delete(req, res, next) {
        try {
            let { id } = req.params;

            let user = await userService.getById(id);
            if (!user) throw createError.NotFound("User not exists in database.");
            if(user.username == 'administrator') throw createError.BadRequest("Can not delete Administrator account.");

            let result = await userService.delete(id);
            return res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();