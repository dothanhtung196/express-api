const permissionRepository = require("../repositories/permission-repository")

class PermissionService
{
    async getAll(){
        return await permissionRepository.getAll();
    }

    async getById(id){
        return await permissionRepository.getById(id);
    }

    async getByIds(ids){
        return await permissionRepository.getByIds(ids);
    }
}

module.exports = new PermissionService();