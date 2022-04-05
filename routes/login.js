const express = require('express');
const validatorLogin = require('../middlewares/loginMiddlewares');
const { getUserData } = require('../controllers/userControllers');
const { loginUser } = require('../controllers/loginControllers');

const router = express.Router();

router.post('/login', validatorLogin, loginUser);

router.get('/me', getUserData);

module.exports = router;
