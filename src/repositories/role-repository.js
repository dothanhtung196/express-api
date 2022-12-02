const model = require('../database/models');

class RoleRepository {
    async getAll() {
        return await model.Role.findAll({ raw: true });
    }

    async getById(id) {
        return await model.Role.findByPk(id, { raw: true });
    }

    async getRoleByUserId(userId){
        return await model.Role.findOne({
            where: {
                userId: userId
            },
            raw: true
        });
    }
}

module.exports = new RoleRepository();