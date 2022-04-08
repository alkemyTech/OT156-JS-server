const { Router } = require('express');
const validatorCategories = require('../middlewares/categoriesMiddlewares');
const { validatorAdmin } = require('../middlewares/adminMiddlewares');
const {
  saveCategory,
  updateCategory,
} = require('../controllers/categoriesControllers');

const router = Router();

router.post('/', validatorCategories, saveCategory);
router.put('/:id', validatorAdmin, updateCategory);
/* TODO agregar validacion de existente */

module.exports = router;
