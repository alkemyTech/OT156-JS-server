const { decodeAuthToken } = require("../services/jwtServices");

const getUserData = async (req, res, next) => {
  try {
    const user = decodeAuthToken(req.headers.authorization);
    res.send(user);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getUserData,
};
