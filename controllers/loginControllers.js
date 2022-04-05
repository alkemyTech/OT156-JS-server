const { login } = require('../services/loginServices');

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

module.exports = {
  loginUser,
};
