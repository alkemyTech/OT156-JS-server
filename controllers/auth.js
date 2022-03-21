const bcrypt = require("bcrypt");
const Models = require("../models/index");

const create = async (req, res, next) => {

  const checkEmail = await Models.Users.findOne({
    where: { email: req.body.email },
    raw: true,
  });

  if (checkEmail) {
    throw new Error("Email already registered");
  }

  try {

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const data = await Models.Users.create(req.body);
    res.status(200).json({ data });

  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
};
