const { check } = require('express-validator');
const { getById } = require('../services/categoriesServices');
const commonMiddleware = require('../utils/commonMiddleware');

//  valida el campo name, y que el mismo sea un string
const validatorCategories = [
  check('name', 'Name is required').exists().notEmpty(),
  check('name', 'Name must be string').isString(),
  commonMiddleware,
];

const validatorCategoryExist = [
  check('id', 'Id is required').exists().isNumeric(),
  check('id', 'Id not valid').custom(async (id) => {
    const result = await getById(id);
    if (!result) {
      throw new Error('ID not exist');
    }
  }),
  commonMiddleware,
];

module.exports = { validatorCategories, validatorCategoryExist };
