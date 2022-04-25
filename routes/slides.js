const { Router } = require('express');
const validatorAdmin = require('../middlewares/adminMiddlewares');
const {getAllSlides,updateSlides,getSlidesById,deleteSlide,saveSlides} = require('../controllers/slidesController');
const multer = require('multer');

const router = Router();
const upload = multer();

router.get('/', getAllSlides);
router.put('/:id', upload.single('image'), validatorAdmin, updateSlides);
router.get('/:id', getSlidesById);
router.delete('/:id', validatorAdmin, deleteSlide);
router.post('/', upload.single('image'), validatorAdmin, saveSlides);

module.exports = router;
