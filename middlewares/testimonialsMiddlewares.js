const { check } = require('express-validator');
const commonMiddleware = require('../utils/commonMiddleware');

const validatorTestimonial = [
  check('name', 'Name is required').exists().notEmpty(),
  check('name', 'Name must be string').isString(),
  check('content', 'Content is required').exists().notEmpty(),
  commonMiddleware,
];

module.exports = validatorTestimonial;
