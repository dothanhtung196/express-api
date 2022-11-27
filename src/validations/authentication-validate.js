const joi = require('joi');

const authenticationValidate = joi.object({
    username: joi.string()
        .alphanum()
        .min(3)
        .max(250)
        .required(),
    password: joi.string()
        .min(6)
        .max(250)
        .required(),
});

module.exports = authenticationValidate;