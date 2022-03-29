const { Router } = require('express');
const validatorNews = require('../middlewares/newsMiddlewares');
const { saveNews } = require('../controllers/newsControllers');

const router = Router();

router.post('/', validatorNews, saveNews);

module.exports = router;
