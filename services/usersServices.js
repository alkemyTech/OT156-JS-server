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

const findEmail = async (email) => {
  return await User.findOne({
    where: { email },
  });
};

const remove = async (id) => {
  return await User.update(
    { deletedAt: new Date() },
    {
      where: { id },
    }
  );
};

module.exports = {
  getAllForCamps,
  getById,
  findEmail,
  remove,
};
