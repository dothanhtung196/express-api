const roleRepository = require("../repositories/role-repository");

class RoleService
{
    async getAll(){
        return await roleRepository.getAll();
    }

    async getById(id){
        return await roleRepository.getById(id);
    }
}

module.exports = new RoleService();