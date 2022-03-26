const { Router } = require("express");
const router = Router();
const authRoutes = require("./authRoutes");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.use("/auth", authRoutes);
module.exports = router;
