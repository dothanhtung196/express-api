const createError = require('http-errors');
const messageCustom = require('../helpers/message-custom');
const roleService = require("../services/role-service");
const { roleValidate } = require('../validations/role-validate');

class RoleController {
    async getAll(req, res, next) {
        try {
            let result = await roleService.getAll();
            res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            let { id } = req.params;
            var result = await roleService.getById(id);
            if(!result) throw createError.NotFound("Role does not exists in database.");

            res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }

    async add(req, res, next){
        try {
            let { error } = roleValidate.validate(req.body, { abortEarly: false });
            if (error) throw createError.BadRequest(messageCustom.validate(error.details));

            let result = await roleService.add(req.body);
            res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next){
        try {
            let { error } = roleValidate.validate(req.body, { abortEarly: false });
            if (error) throw createError.BadRequest(messageCustom.validate(error.details));

            let { id } = req.params;
            var result = await roleService.edit(id, req.body);
            res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next){
        try {
            let {id} = req.params;
            var result = await roleService.delete(id);
            res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new RoleController();