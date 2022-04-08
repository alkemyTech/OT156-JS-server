const { Router } = require('express');
const validatorAdmin = require('../middlewares/adminMiddlewares');
const {
  validatorCategories,
  validatorCategoryExist,
} = require('../middlewares/categoriesMiddlewares');
const {
  saveCategory,
  getAllCategories,
  removeCategory,
} = require('../controllers/categoriesControllers');

const router = Router();

router.post('/', validatorAdmin, validatorCategories, saveCategory);
router.get('/', validatorAdmin, getAllCategories);
router.delete('/:id', validatorAdmin, validatorCategoryExist, removeCategory);

module.exports = router;
