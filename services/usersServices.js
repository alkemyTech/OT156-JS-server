const { User, Role } = require('../models');

const getAllForCamps = async () => {
  return await User.findAll({
    attributes: ['firstName', 'lastName', 'email'],
  });
};

const getById = async (id) => {
  return await User.findByPk(id, {
    attributes: { exclude: ['password'] },
    include: [{ model: Role, as: 'role' }],
  });
};

const findEmail = async (email) => {
  return await User.findOne({
    where: { email },
  });
};

const update = async (id, data, resetToken) => {
  let res;
  res = await User.update(data, {
    where: { id },
  });
  if (resetToken && res[0] === 1) {
    res = await getById(id);
  }
  return res;
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
  update,
  remove,
};
