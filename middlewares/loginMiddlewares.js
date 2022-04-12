const { check } = require('express-validator');
const commonMiddleware = require('../utils/commonMiddleware');

const validatorLogin = [
  check('email', 'Email is required').exists().notEmpty(),
  check('email').isEmail(),
  check('password', 'Password is required').notEmpty(),
  check('password').isLength({ min: 4 }),
  commonMiddleware,
];

module.exports = validatorLogin;
