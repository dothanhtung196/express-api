const claimRepository = require("../repositories/claim-repository");

class ClaimService{
    getByUserId(userId){
        return claimRepository.getByUserId(userId);
    }
}

module.exports = new ClaimService();