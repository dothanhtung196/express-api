const model = require('../database/models');

class RoleRepository {
    async getAll() {
        return await model.Role.findAll({ raw: true });
    }

    async getById(id) {
        return await model.Role.findByPk(id, { raw: true });
    }

    async add(request){
        return await model.Role.create({

        })
    }

    async edit(id, request){

    }

    async delete(id){

    }
}

module.exports = new RoleRepository();