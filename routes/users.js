const { Router } = require('express');
const { updateUser, deleteUser,getAllUsers,getUserById } = require('../controllers/usersControllers');
const validatorAuth = require('../middlewares/auth');
const authController = require('../controllers/auth');
const validatorAdmin = require('../middlewares/adminMiddlewares');
const { validatorUserExist } = require('../middlewares/userUpdateMiddlewares');

const router = Router();

/* GET users listing. */
router.get('/',validatorAdmin, getAllUsers);
router.get('/:id',validatorAdmin, getUserById);
router.post('/register', validatorAuth, authController.create);
router.put('/:id', validatorUserExist, updateUser);
router.delete('/:id',validatorAdmin, deleteUser);

module.exports = router;
