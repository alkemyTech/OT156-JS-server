const { Router } = require('express');
const validatorTestimonal = require('../middlewares/testimonialsMiddlewares');
const { saveTestimonial } = require('../controllers/testimonialControllers');

const router = Router();

router.post('/', validatorTestimonal, saveTestimonial);

module.exports = router;
