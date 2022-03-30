const { Router } = require('express');
const validatorNews = require('../middlewares/newsMiddlewares');
const { saveNews,getNews } = require('../controllers/newsControllers');

const router = Router();

router.post('/', validatorNews, saveNews);
router.get('/', getNews);

module.exports = router;
