const { getAllForCamps } = require('../services/usersServices');

const getAllUsersForCamps = async (req, res, next) => {
  try {
    const allUsers = await getAllForCamps();
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsersForCamps,
};
