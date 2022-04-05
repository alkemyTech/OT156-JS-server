const { validationResult } = require('express-validator');
const { validToken, validationRole } = require('../services/roleValidServices');

const validatorAdmin = [
  validToken,
  validationRole('Admin'),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      next();
    } catch (errors) {
      res.send({ errors });
    }
  },
];

module.exports = validatorAdmin;
