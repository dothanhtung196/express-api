const createError = require("http-errors");
const claimService = require("../services/claim-service");

const policyAuthorization = (parameter) => {
    return async (req, res, next) => {
        if (!parameter) throw new Error("Policy parameter is undefined.");

        try {
            let { userId } = req.payload;

            let user = await userService.getById(userId);
            if (!user) throw new Error("Can not get user from database.");

            let claims = claimService.getByUserId(userId);
            if (!claims || claims.length == 0) throw new Error("Can not get claim list from database.");

            let claim = claims.find((x) => x.claimType == parameter);
            if (!claim) throw new Error("Can not get policy.");

            if (claim.claimValue) {
                return next();
            } else {
                throw createError.Unauthorized("User don't have permission.");
            }
        } catch (error) {
            return next(error);
        }
    };
};

module.exports = policyAuthorization;
