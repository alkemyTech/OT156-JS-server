const { Router } = require('express');
const validatorCategories = require('../middleware/categories');
const { saveCategory } = require('../controller/categories');

const router = Router();

/* POST categories. */
router.post('/', validatorCategories, saveCategory);

module.exports = router;
