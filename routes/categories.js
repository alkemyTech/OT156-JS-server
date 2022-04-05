const { Router } = require('express');
const validatorAdmin = require('../middlewares/adminMiddlewares');
const validatorCategories = require('../middlewares/categoriesMiddlewares');
const {
  saveCategory,
  getAllCategories,
} = require('../controllers/categoriesControllers');

const router = Router();

router.post('/', validatorCategories, saveCategory);
router.get('/', validatorAdmin, getAllCategories);

module.exports = router;
