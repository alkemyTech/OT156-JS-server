var express = require('express');
var router = express.Router();
const {getAllUsers} = require('../controllers/adminController');

router.get('/users', getAllUsers);

module.exports = router;