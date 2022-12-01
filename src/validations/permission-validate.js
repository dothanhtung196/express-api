const joi = require('joi');

const permissionValidate = joi.object({
    name: joi.string()
        .required(),
    roleId: joi.number()
        .required(),
    code: joi.string()
        .required(),
    statusId: joi.number
        .required(),
    createdBy: joi.string
        .required(),
    updatedBy: joi.string
        .required(),
});

module.exports = permissionValidate;