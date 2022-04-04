const { Router } = require('express');
const validatorNews = require('../middlewares/newsMiddlewares');
const { saveNews,getNews,updateNews,getNewsById,deleteNewsbyId } = require('../controllers/newsControllers');

const router = Router();

router.post('/', validatorNews, saveNews);
router.get('/', getNews);
router.put('/:id', validatorNews, updateNews);
router.get('/:id', getNewsById);
router.delete('/:id', deleteNewsbyId);

module.exports = router;
