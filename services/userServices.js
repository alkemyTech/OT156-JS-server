const { User } = require('../models');

const findEmail = async (email) => {
  return await User.findOne({
    where: { email },
  });
};

module.exports = { findEmail };
