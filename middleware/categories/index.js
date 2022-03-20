const { check, validationResult } = require('express-validator');

//  valida el campo name, y que el mismo sea un string
const validatorCategories = [
  check('name', 'Name is required').exists().notEmpty(),
  check('name', 'Name must be string').isString(),
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

module.exports = validatorCategories;
