const Joi = require("joi");
const { validatorHandler } = require("../utils/validatorHandler");

const signup = (req, res, next) => {
  const schema = Joi.object().keys({
    userName: Joi.string().trim().min(3).max(50).required(),
    email: Joi.string().trim().email().required(),
    roll: Joi.string().trim().required(),
    phoneNumber: Joi.string().trim().required(),
    profileImage: Joi.string().trim().optional(),
    coverImage: Joi.string().trim().optional(),
    password: Joi.string()
      .trim()
      .pattern(
        new RegExp(
          "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$"
        )
      )
      .required(),
    status: Joi.string().trim().optional().default("CREATED"),
  });
  validatorHandler(req, res, next, schema);
};
const signin = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string()
      .trim()
      .pattern(
        new RegExp(
          "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$"
        )
      )
      .required(),
    status: Joi.string().trim().required().default("CREATED"),
  });
  validatorHandler(req, res, next, schema);
};

const search = (req, res, next) => {
  const schema = Joi.object().keys({
    data: Joi.object(),
    page: Joi.number().min(0),
    pageSize: Joi.number().min(0),
    order: Joi.array(),
  });
  validatorHandler(req, res, next, schema);
};

const update = (req, res, next) => {
  const schema = Joi.object().keys({
    userName: Joi.string().trim().min(3).max(50).required(),
    email: Joi.string().trim().email(),
    roll: Joi.string().trim().required(),
    phoneNumber: Joi.string().trim().required(),
    profileImage: Joi.string().trim().optional(),
    coverImage: Joi.string().trim().optional(),
    password: Joi.string()
      .trim()
      .pattern(
        new RegExp(
          "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$"
        )
      ),
    currentPassword: Joi.string()
      .trim()
      .pattern(
        new RegExp(
          "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$"
        )
      ),
    status: Joi.string().trim().optional().default("CREATED"),
  });
  validatorHandler(req, res, next, schema);
};

module.exports = {
  signup,
  signin,
  update,
  search,
};
