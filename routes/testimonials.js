const { Router } = require('express');
const Testimonial = require('../models/testimonials');
const { validatorTestimonal, validatorTestimonalDelete} = require('../middlewares/testimonialsMiddlewares');
const { saveTestimonial , deleteTestimonialbyId } = require('../controllers/testimonialController');
const validatorAdmin = require('../middlewares/adminMiddlewares');

const router = Router();

router.post('/', validatorTestimonal, saveTestimonial);

router.delete( '/:id', validatorAdmin , validatorTestimonalDelete, deleteTestimonialbyId );

module.exports = router;
