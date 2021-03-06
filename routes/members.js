const express = require('express');
const { createMember, deleteMembers, getAllMembers, updateMembers  } = require('../controllers/membersControllers');
const { check } = require('express-validator');

const router = express.Router();

router.get( '/', getAllMembers );
router.delete('/:id', deleteMembers)
router.post('/', [check("name").isString()], createMember);
router.put('/:id', updateMembers)

module.exports = router;