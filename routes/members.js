const express = require('express');
const { createMember, deleteMembers, getAllMembers  } = require('../controllers/membersControllers');
const validatorAdmin = require('../middlewares/adminMiddlewares');

const router = express.Router();

router.get( '/', validatorAdmin ,  getAllMembers );
router.post('/', createMember);
router.delete('/:id', deleteMembers)

module.exports = router;