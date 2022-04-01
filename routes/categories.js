const { Router } = require('express');
const validatorCategories = require('../middlewares/categoriesMiddlewares');
const { saveCategory } = require('../controllers/categoriesControllers');

const router = Router();

router.post('/', validatorCategories, saveCategory);

module.exports = router;
