const { Router } = require('express');
const validCategories = require('../middleware/categories');
const { saveCategory } = require('../controller/categories');

const router = Router();

/* POST categories. */
router.post('/', validCategories, saveCategory);

module.exports = router;
