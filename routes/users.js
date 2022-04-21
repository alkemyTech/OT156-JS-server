const { Router } = require('express');
const { updateUser, deleteUser } = require('../controllers/usersControllers');
const validatorAuth = require('../middlewares/auth');
const authController = require('../controllers/auth');
const { validatorUserExist } = require('../middlewares/userUpdateMiddlewares');

const router = Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', validatorAuth, authController.create);
router.put('/:id', validatorUserExist, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
