const { check, validationResult } = require('express-validator');

const validatorLogin = [
  check('email', 'Email is required').exists().notEmpty(),
  check('email').isEmail(),
  check('password', 'Password is required').notEmpty(),
  check('password').isLength({ min: 4 }),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      next();
    } catch (errors) {
      res.status(400).json({ errors: errors.array() });
    }
  },
];

module.exports = validatorLogin;
