const { Router } = require("express");
const { getAllContactsinfo, createContact } = require("../controllers/contactContollers");
const  { validatorNewContact } = require('../middlewares/contactMiddlewares');
const router = Router();

router.get("/", getAllContactsinfo);
router.post("/", validatorNewContact , createContact );

module.exports = router;
