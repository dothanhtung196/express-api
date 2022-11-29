const joi = require('joi');

const roleAddValidate = joi.object({
    name: joi.string()
        .required(),
    userId: joi.number()
        .required(),
    statusId: joi.string()
        .required(),
    createdBy: joi.string()
        .required(),
    updatedBy: joi.string()
        .required(),
});

module.exports = {roleAddValidate};