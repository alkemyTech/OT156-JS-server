const { User, Role } = require('../models');

const getAllForCamps = async () => {
  return await User.findAll({
    attributes: ['firstName', 'lastName', 'email'],
  });
};

const getById = async (id) => {
  return await User.findByPk(id, {
    attributes: ['id', 'firstName', 'email'],
    include: [{ model: Role, as: 'role' }],
  });
};

module.exports = {
  getAllForCamps,
  getById,
};
