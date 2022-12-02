const permissionRepository = require("../repositories/permission-repository")

class PermissionService
{
    async getAll(){
        return await permissionRepository.getAll();
    }

    async getById(id){
        return await permissionRepository.getById(id);
    }
}

module.exports = new PermissionService();