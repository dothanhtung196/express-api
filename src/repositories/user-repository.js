const model = require('../database/models');

class UserRepository {

    async getAll() {
        return await model.User.findAll({
            raw: true,
            include: {
                model: model.Status,
                as: 'Status'
            }
        });
    }

    async getByUsername(username) {
        return await model.User.findOne({ where: { username: username }, raw: true });
    }

    async getById(id) {
        return await model.User.findByPk(id, { raw: true });
    }

    async add(request) {
        return await model.User.create(request);
    }

    async edit(id, request) {
        return await model.User.update(request, {
            where: {
                id: id
            },
            raw: true
        });
    }

    async delete(id) {
        return await model.User.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = new UserRepository();