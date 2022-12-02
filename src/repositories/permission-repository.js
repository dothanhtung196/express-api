const model = require('../database/models');

class PermissionRepository {
    async getAll(){
        return await model.Permission.getAll({ raw: true});
    }

    async getById(id){
        return await model.Permission.findByPk(id, {raw: true});
    }
}

module.exports = new PermissionRepository();