const joi = require('joi');

const userValidate = joi.object({
    username: joi.string()
        .alphanum()
        .min(3)
        .max(250)
        .required(),
    password: joi.string()
        .alphanum()
        .min(6)
        .max(250)
        .required(),
});

module.exports = userValidate;