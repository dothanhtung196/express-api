const roleRepository = require("../repositories/role-repository");

class RoleService
{
    async getAll(){
        return await roleRepository.getAll();
    }

    async getById(id){
        return await roleRepository.getById(id);
    }

    async add(request){
        return await roleRepository.add(request);
    }

    async edit(id, request){
        return await roleRepository.edit(id, request);
    }

    async delete(id){
        return await roleRepository.delete(id);
    }
}

module.exports = new RoleService();