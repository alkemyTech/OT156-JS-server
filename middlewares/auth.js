const { check, validationResult } = require('express-validator');

const validatorRegister = [
  check('firstName', 'firstName is required').exists().notEmpty(),
  check('firstName', 'firstName must be string').isString(),
  check('lastName', 'lastName is required').exists().notEmpty(),
  check('lastName', 'lastName must be string').isString(),
  check('email', 'email is required').exists().notEmpty(),
  check('email', 'email must be email').isEmail(),
  check('password', 'password is required').exists().notEmpty(),
  check('password', 'password must be string').isString(),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      next();
    } catch (errors) {
      res.status(403);
      res.send({ errors });
    }
  },
];

module.exports = validatorRegister;