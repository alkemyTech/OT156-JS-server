const { Router } = require('express');
const validatorCategories = require('../middlewares/categoriesMiddlewares');
const {
  saveCategory,
  getAllCategories,
} = require('../controllers/categoriesControllers');

const router = Router();

router.post('/', validatorCategories, saveCategory);
router.get('/', getAllCategories);

module.exports = router;
