const model = require('../database/models');

class PermissionRepository {
    async getAll(){
        return await model.Permission.getAll({ raw: true});
    }

    async getById(id){
        return await model.Permission.findByPk(id, {raw: true});
    }

    async add(request){
        return await model.Permission.create(request);
    }

    async edit(id, request){
        return await model.Permission.update(request, {
            where: {
                id: id
            }
        });
    }

    async delete(id){
        return await model.Permission.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new PermissionRepository();