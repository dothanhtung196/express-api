const model = require('../database/models');

class RoleRepository {
    async getAll() {
        return await model.Role.findAll({ raw: true });
    }

    async getById(id) {
        return await model.Role.findByPk(id, { raw: true });
    }
}

module.exports = new RoleRepository();