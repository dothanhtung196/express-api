const joi = require('joi');

const loginValidate = joi.object({
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

const refreshTokenValidate = joi.object({
    refreshToken: joi.string().required()
});

module.exports = {
    loginValidate,
    refreshTokenValidate
};