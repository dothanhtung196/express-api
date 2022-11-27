const stringCipher = require("../helpers/string-cipher");
const userRepository = require("../repositories/user-repository");

class UserService
{
    async getAll() {
        return await userRepository.getAll();
    }

    async getByUsername(username) {
        return await userRepository.getByUsername(username);
    }

    async getById(id) {
        return await userRepository.GetById(id);
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