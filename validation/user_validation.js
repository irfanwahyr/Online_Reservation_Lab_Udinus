const Joi = require('joi');

function userSchema(data) {
  const schema = Joi.object({
    // Validation for username
    username: Joi.string()
      .regex(/^[a-zA-Z0-9\s]+$/)
      .min(3)
      .max(30)
      .required(),

    // Validation for email
    email: Joi.string()
      .pattern(/^[0-9]+@mhs\.dinus\.ac\.id$|^[a-zA-Z0-9]+@gmail\.com$|^[a-zA-Z0-9]+@dsn\.dinus\.ac\.id$/)
      .required(),

    // Validation for password
    password: Joi.string()
      .required(),
  });

  return schema.validate(data);
}

module.exports = {
  userSchema,
};
