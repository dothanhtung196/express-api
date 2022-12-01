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
        return await model.Role.update(request, {
            where: {
                id: id
            }
        })
    }

    async delete(id){
        return await model.Role.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new RoleRepository();