const { decodeAuthToken } = require('./jwtServices');
const { getById } = require('./usersServices');

const compareRole = (role, validRole) => (role !== validRole ? true : false);

const verifyToken = async (token) => {
  if (!token) return 'Authentication failed! Token required';

  token =
    token.toLowerCase().search('bearer') >= 0 ? token.substring(7) : token;

  const userToken = decodeAuthToken(token);

  const user = await getById(userToken.id);

  if (!user) return 'Authentication failed! Invalid token - User not found';

  return user.dataValues;
};

module.exports = {
  validToken: async (req, res, next) => {
    try {
      const token = req.header('Authorization');
      const user = await verifyToken(token);
      if (!user.id) {
        return res.status(401).json({ error: user });
      }
      req.user = user;
      next();
    } catch (error) {
      next(error);
    }
  },
  validationRole: (role) => {
    return (req, res, next) => {
      try {
        const roleUser = req.user.role.dataValues.name;
        const verify = compareRole(role, roleUser);
        if (verify) {
          return res
            .status(403)
            .json({ error: 'Authorization failed! User without privileges' });
        }
        next();
      } catch (error) {
        next(error);
      }
    };
  },
};
