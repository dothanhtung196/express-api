const stringCipher = require("../helpers/string-cipher");
const userRepository = require("../repositories/user-repository");

class UserService
{
    async getAll() {
        return await userRepository.getAll();
    }

    async getByUsername(username) {
        let user = await userRepository.getByUsername(username);
        delete user.password;
        return user;
    }

    async getById(id) {
        let user = await userRepository.GetById(id);
        delete user.password;
        return user;
    }

    async Add(request) {
        request.password = await stringCipher.hashPassword(request.password);
        return await userRepository.Add(request);
    }

    async Edit(id, request) {
        return await userRepository.Edit(id, request);
    }

    async Delete(id) {
        return await userRepository.Delete(id);
    }
}

module.exports = new UserService();