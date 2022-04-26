var express = require('express');
var router = express.Router();
const validatorAdmin = require('../middlewares/adminMiddlewares');
const {getAllUsers} = require('../controllers/adminController');

router.get('/users',validatorAdmin,getAllUsers);

module.exports = router;