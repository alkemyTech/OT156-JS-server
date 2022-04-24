const { Router } = require('express');
const multer = require('multer');
const validatorAdmin = require('../middlewares/adminMiddlewares');
const {
  addActivity,
  updateActivity,
  getAllActivities,
  getOneActivity,
  deleteActivityById,
} = require('../controllers/activitiesControllers');

const router = Router();
const upload = multer();

router.post('/', validatorAdmin, upload.single('image'), addActivity);
router.put('/:id', validatorAdmin, updateActivity);
router.get('/', getAllActivities);
router.get('/:id', getOneActivity);
router.delete('/:id', validatorAdmin, deleteActivityById);

module.exports = router;
