const express = require('express');
const { getAllMembers } = require('../controllers/membersControllers');
const validatorAdmin = require('../middlewares/adminMiddlewares');

const router = express.Router();

router.get( '/', validatorAdmin ,  getAllMembers );

module.exports = router; 