const createError = require('http-errors');
const roleService = require("../services/role-service");

class RoleController {
    async getAll(req, res, next) {
        try {
            let result = await roleService.getAll();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            let { id } = req.params;
            var result = await roleService.getById(id);
            if(!result) throw createError.NotFound("Role does not exists in database");

            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async add(req, res, next){
        try {

            let result = await roleService.add(req.body);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new RoleController();