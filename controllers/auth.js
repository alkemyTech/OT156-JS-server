const bcrypt = require("bcrypt");
const Models = require("../models");

const create = async (req, res, next) => {

  const checkEmail = await Models.User.findOne({
    where: { email: req.body.email },
    raw: true,
  });

  if (checkEmail) {
    res.status(409).json({ "error": "email ya registrado"});
  }

  try {

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const data = await Models.User.create(req.body);
    console.log(data)
    res.status(200).json({ data });

  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
};
