const express = require('express');
const { check } = require('express-validator');
const { createMember, deleteMembers, updateMembers } = require('../controllers/membersControllers');

const router = express.Router();


router.post('/', [check("name").isString()], createMember);
router.delete('/:id', deleteMembers)
router.put('/:id', updateMembers)

module.exports = router;