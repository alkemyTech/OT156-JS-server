const express = require('express');
const { createMember, deleteMembers } = require('../controllers/membersControllers');

const router = express.Router();


router.post('/', createMember);
router.delete('/:id', deleteMembers)

module.exports = router;