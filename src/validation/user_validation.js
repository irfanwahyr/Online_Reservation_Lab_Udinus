const Joi = require("joi");

const registerUserValidation = Joi.object({
    id: Joi.number().max(11).required(),
    username: Joi.string.max(100).required(),
    email: Joi.string.max(20).required(),
    password: Joi.string.max(100).required(),

});

export {
    registerUserValidation
}