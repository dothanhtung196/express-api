const stringCipher = require("../helpers/string-cipher");
const userRepository = require("../repositories/user-repository");

class UserService
{
    async getAll() {
        return await userRepository.getAll();
    }

    async getByUsername(username) {
        let user = await userRepository.getByUsername(username);
        if(user) delete user.password;
        return user;
    }

    async getById(id) {
        let user = await userRepository.getById(id);
        if(user) delete user.password;
        return user;
    }

    async add(request) {
        request.password = await stringCipher.hashPassword(request.password);
        let result =  await userRepository.add(request);
        if(result) delete result.password;
        return result;
    }

    async edit(id, request) {
        delete request.username;
        return await userRepository.edit(id, request);
    }

    async delete(id) {
        return await userRepository.delete(id);
    }
}

module.exports = new UserService();