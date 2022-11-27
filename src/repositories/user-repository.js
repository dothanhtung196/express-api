const model = require('../database/models');

class UserRepository {

    async getAll() {
        return await model.User.findAll({ raw: true });
    }

    async getByUsername(username) {
        return await model.User.findOne({ where: { username: username }, raw: true });
    }

    async GetById(id) {
        return await model.User.findByPk(id, { raw: true });
    }

    async Add(request) {
        return await model.User.create({
            username: request.username,
            password: request.password,
            fullName: request.fullName,
            phone: request.phone,
            email: request.email,
            address: request.address,
            createdBy: request.createdBy,
            updatedBy: request.updatedBy,
        });
    }

    async Edit(id, request) {
        return await model.User.update({
            username: request.username,
            password: request.password,
            fullName: request.fullName,
            phone: request.phone,
            email: request.email,
            address: request.address,
            createdBy: request.createdBy,
            updatedBy: request.updatedBy,
        }, {
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