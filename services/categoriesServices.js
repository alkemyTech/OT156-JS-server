const { Categories } = require('../models');

const create = async (category) => {
  return await Categories.create(category);
};

const getById = async (id) => {
  return await Categories.findByPk(id);
};

const getAll = async () => {
  return await Categories.findAll();
};

const update = async (id, data) => {
  return await Categories.update(data, {
    where: { id },
  });
};

const remove = async (id) => {
  return await Categories.destroy({ where: { id } });
};

module.exports = {
  create,
  getById,
  getAll,
  update,
  remove,
};
