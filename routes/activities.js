const { Router } = require('express');
const validatorAdmin = require('../middlewares/adminMiddlewares');
const {
  addActivity,
  updateActivity,
} = require('../controllers/activitiesControllers');

const router = Router();

router.post('/', validatorAdmin, addActivity);
router.put('/:id', validatorAdmin, updateActivity);

module.exports = router;
