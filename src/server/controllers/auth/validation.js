const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string(),
        email: Joi.string().email(),
        password: Joi.string(),
    });
    return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string(),
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;