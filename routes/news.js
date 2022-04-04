const { Router } = require('express');
const validatorNews = require('../middlewares/newsMiddlewares');
const { saveNews,getNews,updateNews } = require('../controllers/newsControllers');

const router = Router();

router.post('/', validatorNews, saveNews);
router.get('/', getNews);
router.put('/:id', validatorNews, updateNews);

module.exports = router;
