const { Router } = require('express');
const validatorAdmin = require('../middlewares/adminMiddlewares');
const {getAllSlides,updateSlides,getSlidesById,deleteSlide,saveSlides} = require('../controllers/slidesController');

const router = Router();

router.get('/', getAllSlides);
router.put('/:id', validatorAdmin, updateSlides);
router.get('/:id', getSlidesById);
router.delete('/:id', validatorAdmin, deleteSlide);
router.post('/', validatorAdmin, saveSlides);

module.exports = router;
