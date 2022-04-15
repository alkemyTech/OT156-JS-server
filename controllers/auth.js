const bcrypt = require("bcrypt");
const Models = require("../models");
const { login } = require('../services/loginServices');

const create = async (req, res, next) => {

  const checkEmail = await Models.User.findOne({
    where: { email: req.body.email },
    raw: true,
  });

  if (checkEmail) {
    res.status(409).json({ "error": "email ya registrado"});
  }

  try {
    const password = req.body.password
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const newUser = {...req.body,
      roleId: 2,
      image:''
    }

    await Models.User.create(newUser);
    const user = await login({ email:newUser.email, password });
    if (user.token) {
      res.send(user);
    } else {
      res.status(401).json({ error: user });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
};
