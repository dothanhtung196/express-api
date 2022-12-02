const model = require('../database/models');

class RolePermissionRepository{
    async getByRoleId(roleId){
        return await model.RolePermission.findAll({
            where: {
                roleId: roleId
            },
            raw: true
        });
    }
}

module.exports = new RolePermissionRepository();