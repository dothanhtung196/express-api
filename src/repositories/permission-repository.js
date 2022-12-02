const model = require('../database/models');
const { Op } = require("sequelize");

class PermissionRepository {
    async getAll(){
        return await model.Permission.getAll({ raw: true});
    }

    async getById(id){
        return await model.Permission.findByPk(id, {raw: true});
    }

    async getByIds(ids){
        return await model.Permission.findAll({
            where: {
                roleId: {
                    [Op.in]: ids
                }
            },
            raw: true
        });
    }
}

module.exports = new PermissionRepository();