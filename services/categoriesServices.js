const { Categories } = require('../models');

const create = async (category) => {
  return await Categories.create(category);
};

const getById = async (id) => {
  return await Categories.findByPk(id);
};

const remove = async (id) => {
  return await Categories.destroy({ where: { id } });
};

module.exports = {
  create,
  getById,
  remove,
};
