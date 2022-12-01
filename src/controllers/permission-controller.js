const messageCustom = require("../helpers/message-custom");
const createError = require('http-errors');
const permissionService = require("../services/permission-service");
const permissionValidate = require("../validations/permission-validate");

class PermissionController
{
    async getAll(req, res, next){
        try {
            let result = await permissionService.getAll();
            res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next){
        try {
            let { id } = req.params;
            let result = await permissionService.getById(id);
            if(!result) throw createError.NotFound("Permission does not exists in database.");
            res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }

    async add(req, res, next){
        try {
            let { error } = permissionValidate.validate(req.body, { abortEarly: false });
            if (error) throw createError.BadRequest(messageCustom.validate(error.details));

            let result = await permissionService.add(req.body);
            res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next){
        try {
            let { error } = permissionValidate.validate(req.body, { abortEarly: false });
            if (error) throw createError.BadRequest(messageCustom.validate(error.details));

            let { id } = req.params;
            let result = await permissionService.edit(id, req.body);
            res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next){
        try {
            let { id } = req.params;
            let result = await permissionService.delete(id);
            res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }

}

module.exports = PermissionController;