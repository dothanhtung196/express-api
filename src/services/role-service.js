const roleRepository = require("../repositories/role-repository");

class RoleService
{
    async getAll(){
        return await roleRepository.getAll();
    }

    async getById(id){
        return await roleRepository.getById(id);
    }

    async getRoleByUserId(userId){
        return await roleRepository.getRoleByUserId(userId);
    }
}

module.exports = new RoleService();