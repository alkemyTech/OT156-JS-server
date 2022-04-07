const express = require('express');
const { getAllMembers } = require('../controllers/membersControllers');

const router = express.Router();

router.get('/', getAllMembers);

module.exports = router; 