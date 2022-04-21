const { check } = require('express-validator');
const { existsEmailContacts } = require('../services/contactsServices');
const commonMiddleware = require('../utils/commonMiddleware');

//  valida el campo name, y que el mismo sea un string
const validatorNewContact = [
  check('name', 'Name is required').exists().notEmpty(),
  check('name', 'Name must be string').isString(),
  check('phone','Phone must be number').isNumeric(),
  check('email', 'Email wrong format').isEmail(),
  commonMiddleware,
];


module.exports = { validatorNewContact };
