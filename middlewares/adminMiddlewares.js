const commonMiddleware = require('../utils/commonMiddleware');
const { validToken, validationRole } = require('../services/roleValidServices');

const validatorAdmin = [validToken, validationRole('Admin'), commonMiddleware];

module.exports = validatorAdmin;
