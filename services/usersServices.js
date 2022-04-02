const { User } = require('../models');

const getAllForCamps = async () => {
  return await User.findAll({
    attributes: ['firstName', 'lastName', 'email'],
  });
};

module.exports = {
  getAllForCamps,
};
