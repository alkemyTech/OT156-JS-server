const express = require('express');
const { deleteUser } = require('../controllers/usersControllers');
const validatorAuth = require('../middlewares/auth');
const authController = require('../controllers/auth');


const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', validatorAuth, authController.create);

router.delete('/:id', deleteUser);

module.exports = router;
