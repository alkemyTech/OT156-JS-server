const { login } = require('../services/loginServices');
const { decodeAuthToken } = require('../services/jwtServices');
const { findEmail } = require('../services/usersServices');

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await login({ email, password });

    if (user.token) {
      res.send(user);
    } else {
      res.status(401).json({ error: user });
    }
  } catch (err) {
    next(err);
  }
};

const getUserData = async (req, res, next) => {
  try {
    const userByToken = decodeAuthToken(req.headers.authorization);
    const {id,firstName,lastName,image,roleId,email}= await findEmail(userByToken.email);
    res.send({id,
      firstName,
      lastName,
      image,
      roleId,
      token:req.headers.authorization,
      email
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  loginUser,
  getUserData,
};
