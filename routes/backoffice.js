const { Router } = require('express');
const { getAllUsersForCamps } = require('../controllers/backofficeControllers');
const validatorAdmin = require('../middlewares/adminMiddlewares');

const router = Router();

router.get('/users', validatorAdmin, getAllUsersForCamps);

module.exports = router;
