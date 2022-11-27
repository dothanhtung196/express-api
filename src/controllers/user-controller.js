const createError = require('http-errors');
const userService = require("../services/user-service");

class UserController
{
    async getAll(req, res, next) {
        try {
            let users = await userService.getAll();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }

    async getByUsername(req, res, next) {
        try {
            let { username } = req.body;
            let user = await userService.getByUsername(username);

            if(!user) throw createError.NotFound("User does not exists.")
            res.json(user);    
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            let { userId } = req.body;
            let user = await userService.getById(userId);

            if (!user) throw createError.NotFound("User does not exists.");
            res.json(error);
        } catch (error) {
            next(error);
        }
    }

    async Add(req, res, next) {
        try {
            let { username } = req.body;
            let userExists = await userService.getByUsername(username);
            if (userExists) throw createError.Conflict("User does exists in database.");

            let result = await userService.Add(req.body);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
    
    async Edit(req, res, next) {
        try {
            let { userId } = req.params;
            let user = await userService.getById(userId);
            if (!user) throw createError.NotFound("User not exists in database.");

            let result = await userService.Edit(userId, req.body);
            return res.json(result);    
        } catch (error) {
            next(error);
        }
    }

    async Delete(req, res, next) {
        try {
            let { userId } = req.params;

            let user = await userService.getById(userId);
            if (!user) throw createError.NotFound("User not exists in database.");

            let result = await userService.Delete(userId);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();