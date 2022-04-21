const { check } = require('express-validator');
const { getById } = require('../services/usersServices');
const { validToken } = require('../services/roleValidServices');
const commonMiddleware = require('../utils/commonMiddleware');

const validatorUserExist = [
  validToken,
  check('id', 'Id is required').exists().isNumeric(),
  check('id', 'Id not valid').custom(async (id) => {
    const result = await getById(id);
    if (!result) {
      throw new Error('User not exist');
    }
  }),
  commonMiddleware,
];

module.exports = { validatorUserExist };
