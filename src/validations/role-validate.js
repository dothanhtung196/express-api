const joi = require('joi');

const roleValidate = joi.object({
    name: joi.string()
        .required(),
    userId: joi.number()
        .required(),
    code: joi.string()
        .required(),
    statusId: joi.number()
        .required(),
    createdBy: joi.string()
        .required(),
    updatedBy: joi.string()
        .required(),
});

module.exports = {roleValidate};