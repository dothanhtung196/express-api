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

    async GetById(id) {
        return await model.User.findByPk(id, { raw: true });
    }

    async Add(request) {
        return await model.User.create(request);
    }

    async Edit(id, request) {
        return await model.User.update(request, {
            where: {
                id: id
            }
        });
    }

    async Delete(id) {
        return await model.USer.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = new UserRepository();