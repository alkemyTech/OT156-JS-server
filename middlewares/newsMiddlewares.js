const { check } = require('express-validator');
const commonMiddleware = require('../utils/commonMiddleware');

const validatorNews = [
  check('name', 'Name is required').exists().notEmpty(),
  check('name', 'Name must be string').isString(),
  check('content', 'Content is required').exists().notEmpty(),
  check('content', 'Content must be string').isString(),
  check('categoryId', 'CategoryId is required').exists().notEmpty(),
  check('categoryId', 'CategoryId must be number').isInt(),
  commonMiddleware,
];

module.exports = validatorNews;
