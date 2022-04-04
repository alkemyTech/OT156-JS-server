const { JWT_EXPIRE_IN } = require("../utils/constants");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = config.development;
const generateAuthToken = (body) => {
  const payload = body;
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE_IN });
};
const decodeAuthToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = { generateAuthToken, decodeAuthToken };
