const { Router } = require('express');
const validatorTestimonial = require('../middlewares/testimonialsMiddlewares');
const validatorAdmin = require('../middlewares/adminMiddlewares');
const {
  saveTestimonial,
  getAllTestimonials,
  updateTestimonials,
  deleteTestimonials,
} = require('../controllers/testimonialController');

const router = Router();

router.post('/', validatorTestimonial, saveTestimonial);
router.get('/', getAllTestimonials);
router.put('/:id', validatorTestimonial, updateTestimonials);
router.delete('/:id', validatorAdmin, deleteTestimonials);

module.exports = router;
