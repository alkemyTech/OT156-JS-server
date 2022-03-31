const { Categories } = require('../models');

const getAll = async () => {
  return await Categories.findAll();
};

module.exports = {
  getAll,
};
