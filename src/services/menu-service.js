const menuRepository = require("../repositories/menu-repository");

class MenuService{
    async getByRoleId(roleId){
        return await menuRepository.getByRoleId(roleId);
    }
}

module.exports = new MenuService();