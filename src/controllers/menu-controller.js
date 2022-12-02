const messageCustom = require("../helpers/message-custom");
const menuService = require("../services/menu-service");

class MenuController{
    async getByRoleId(req, res, next){
        try {
            let { roleId } = req.params;
            let result = await menuService.getByRoleId(roleId);
            res.json(messageCustom.apiResponse(result));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new MenuController();