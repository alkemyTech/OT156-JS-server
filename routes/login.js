const bcrypt = require("bcrypt");
var express = require("express");
var router = express.Router();
const { body, validationResult } = require("express-validator");
const { User } = require("../models/index");
const { getUserData } = require("../controllers/userControllers");

router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 4 }),
  async function (req, res, next) {
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await User.findOne({ where: { email } });

    const passwordIsCorrect =
      user === null ? false : bcrypt.compareSync(password, user.password);

    !passwordIsCorrect ? res.send({ ok: false }) : res.send(user);
  }
);
router.get("/me", getUserData);
module.exports = router;
