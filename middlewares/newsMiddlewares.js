const { check, validationResult } = require('express-validator');

const validatorNews = [
  check('name', 'Name is required').exists().notEmpty(),
  check('name', 'Name must be string').isString(),
  check('content', 'Content is required').exists().notEmpty(),
  check('content', 'Content must be string').isString(),
  check('image', 'Image is required').exists().notEmpty(),
  check('image', 'Image must be string').isString(),
  check('categoryId', 'CategoryId is required').exists().notEmpty(),
  check('categoryId', 'CategoryId must be number').isInt(),
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

module.exports = validatorNews;

