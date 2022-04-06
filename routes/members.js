const express = require('express');
const { createMember, deleteMembers, updateMembers } = require('../controllers/membersControllers');

const router = express.Router();


router.post('/', createMember);
router.delete('/:id', deleteMembers)
router.put('/:id', updateMembers)

module.exports = router;