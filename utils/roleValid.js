const { decodeAuthToken } = require('../services/jwtServices');

const compareRole = (role, validRole) => {
  if (role !== validRole) {
    throw new Error('Authorization failed! User without privileges', 403);
  }
  return true;
};

module.exports = {
  validToken: (req, res, next) => {
    try {
      const token = req.header('Authorization');
      const user = decodeAuthToken(token);
      req.user = user;
      next();
    } catch (error) {
      next(error);
    }
  },
  validationRole: (roleUse) => {
    return (req, res, next) => {
      try {
        const { role } = req.user;
        compareRole(roleUse, role);
        next();
      } catch (error) {
        next(error);
      }
    };
  },
};
