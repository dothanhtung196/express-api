const model = require("../database/models");

class ClaimRepository {
    getByUserId(userId) {
        return model.Claim.findAll({
            where: {
                userId: userId,
            },
            raw: true,
        });
    }
}

module.exports = new ClaimRepository();