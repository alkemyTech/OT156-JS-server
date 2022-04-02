const { validToken, validationRole } = require('../utils/roleValid');

const validatorAdmin = [validToken(), validationRole('Admin')];

module.export = validatorAdmin;
