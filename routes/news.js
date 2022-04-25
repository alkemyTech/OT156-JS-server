const { Router } = require('express');
const validatorNews = require('../middlewares/newsMiddlewares');
const multer = require('multer');
const { saveNews,getNews,updateNews,getNewsById,deleteNewsbyId } = require('../controllers/newsControllers');

const router = Router();
const upload = multer();

router.post('/',  upload.single('image'), validatorNews, saveNews);
router.get('/', getNews);
router.put('/:id', upload.single('image'), validatorNews, updateNews);
router.get('/:id', getNewsById);
router.delete('/:id', deleteNewsbyId);

module.exports = router;
