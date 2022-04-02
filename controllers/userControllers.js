const { decodeAuthToken } = require('../services/jwtServices');
const { getAllForCamps } = require('../services/usersServices');

const getUserData = async (req, res, next) => {
  try {
    const user = decodeAuthToken(req.headers.authorization);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

const getAllUsersForCamps = async (req, res, next) => {
  try {
    const allUsers = await getAllForCamps();
    res.json(allUsers);
  } catch (error) {
    next(err);
  }
};

module.exports = {
  getUserData,
  getAllUsersForCamps,
};
