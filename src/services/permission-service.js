const permissionRepository = require("../repositories/permission-repository")

class PermissionService
{
    async getAll(){
        return await permissionRepository.getAll();
    }

    async getById(id){
        return await permissionRepository.getById(id);
    }

    async add(request){
        return await permissionRepository.add(request);
    }

    async edit(id, request){
        return await permissionRepository.edit(id, request);
    }

    async delete(id){
        return await permissionRepository.delete(id);
    }
}

module.exports = new PermissionService();