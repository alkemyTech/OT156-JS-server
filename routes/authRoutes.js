const { Router } = require("express");
const router = Router();
const { getUserData } = require("../controllers/userControllers");

router.get("/me", getUserData);

module.exports = router;
