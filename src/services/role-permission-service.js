const rolePermissionRepository = require("../repositories/role-permission-repository");

class RolePermissionService{
    async getByRoleId(roleId){
        return await rolePermissionRepository.getByRoleId(roleId);
    }
}

module.exports = new RolePermissionService();