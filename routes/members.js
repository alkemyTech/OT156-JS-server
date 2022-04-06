const express = require('express');
const { createMember } = require('../controllers/membersControllers');

const router = express.Router();


router.post('/', createMember);


module.exports = router;