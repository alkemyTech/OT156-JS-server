const express = require('express');
const { deleteUser } = require('../controllers/usersControllers');

const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.delete('/:id', deleteUser);

module.exports = router;
