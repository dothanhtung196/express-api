const joi = require('joi');

const userValidate = joi.object({
    username: joi.string()
        .alphanum()
        .min(3)
        .max(250)
        .required(),
    password: joi.string()
        .min(6)
        .max(250)
        .required(),
    fullName: joi.string()
        .required(),
    phone: joi.string()
        .required(),
    email: joi.string()
        .email()
        .required(),
    address: joi.string()
        .required(),
    statusId: joi.string()
        .required(),
    createdBy: joi.string()
        .required(),
    updatedBy: joi.string()
        .required(),
});

module.exports = userValidate;