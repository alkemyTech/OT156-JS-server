var express = require('express');
var router = express.Router();
const validatorAuth = require('../middlewares/auth');
const authController = require('../controllers/auth');


router.post('/register', validatorAuth, authController.create);

module.exports = router;