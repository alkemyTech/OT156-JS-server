const { Router } = require("express");
const { getAllContacts } = require("../controllers/contactContollers");
const router = Router();

router.get("/", getAllContacts);

module.exports = router;
