const { check, validationResult } = require('express-validator');

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

module.exports = validatorTestimonal;