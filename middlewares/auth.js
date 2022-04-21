const { check } = require('express-validator');
const commonMiddleware = require('../utils/commonMiddleware');

const validatorRegister = [
  check('firstName', 'firstName is required').exists().notEmpty(),
  check('firstName', 'firstName must be string').isString(),
  check('lastName', 'lastName is required').exists().notEmpty(),
  check('lastName', 'lastName must be string').isString(),
  check('email', 'email is required').exists().notEmpty(),
  check('email', 'email must be email').isEmail(),
  check('password', 'password is required').exists().notEmpty(),
  check('password', 'password must be string').isString(),
  commonMiddleware,
];

module.exports = validatorRegister;
