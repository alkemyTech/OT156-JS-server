const { Router } = require("express");
const validatorTestimonial = require("../middlewares/testimonialsMiddlewares");
const {
  saveTestimonial,
  updateTestimonials,
} = require("../controllers/testimonialController");

const router = Router();

router.post("/", validatorTestimonial, saveTestimonial);
router.put("/:id", validatorTestimonial, updateTestimonials);

module.exports = router;
