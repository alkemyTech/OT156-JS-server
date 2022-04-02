const express = require('express');
const { getAllUsersForCamps } = require('../controllers/userControllers');
const { validatorAdmin } = require('../middlewares/adminMiddlewares');

const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/backoffice/users', validatorAdmin, getAllUsersForCamps);

module.exports = router;
