const { check, validationResult } = require('express-validator');
const { getTestimonialById } = require('../services/testimonialsServices');
const commonMiddleware = require('../utils/commonMiddleware');

const validatorTestimonal = [
  check('name', 'Name is required').exists().notEmpty(),
  check('name', 'Name must be string').isString(),
  check('content', 'Content is required').exists().notEmpty(),
  ( req, res, next) => {
    try {
      validationResult( req ).throw();
      next();
    } catch ( errors ) {
      res.status( 403 );
      res.send( { errors } );
    }
  },
];

const validatorTestimonalDelete = [
  check('id', 'Id is required').exists().isNumeric(),
  check('id', 'Id not valid').custom(async (id) => {
    const result = await getTestimonialById(id);
    if (!result) {
      throw new Error('ID not exist');
    }
  }),
  commonMiddleware,
];



module.exports = {
  validatorTestimonal,
  validatorTestimonalDelete
};