const { Router } = require('express');
const validatorAdmin = require('../middlewares/adminMiddlewares');
const {
  validatorCategories,
  validatorCategoryExist,
} = require('../middlewares/categoriesMiddlewares');
const {
  saveCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  removeCategory,
} = require('../controllers/categoriesControllers');

const router = Router();

router.post('/', validatorAdmin, validatorCategories, saveCategory);
router.get('/', validatorAdmin, getAllCategories);
router.get('/:id', validatorAdmin, validatorCategoryExist, getCategoryById);
router.put('/:id', validatorAdmin, validatorCategoryExist, updateCategory);
router.delete('/:id', validatorAdmin, validatorCategoryExist, removeCategory);

module.exports = router;
