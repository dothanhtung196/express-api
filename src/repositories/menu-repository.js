const model = require('../database/models');

class MenuRepository{
    async getByRoleId(roleId){
        return await model.Menu.findAll({
            where: {
                roleId: roleId
            },
            raw: true
        });
    }
}

module.exports = new MenuRepository();