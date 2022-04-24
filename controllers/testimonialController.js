const {
  createTestimonials,
  getAllTestimonial,
  updateTestimonial,
  removeTestimonial,
  getTestimonialById,
} = require('../services/testimonialsServices');

const saveTestimonial = async (req, res, next) => {
  const { name, content, image } = req.body;
  try {
    const entry = await createTestimonials(name, content, image);
    res.status(200);
    res.send({ entry });
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
};

const getAllTestimonials = async (req, res, next) => {
  try {
    const testimonials = await getAllTestimonial();
    res.status(200).json({ testimonials });
  } catch (error) {
    next(error);
  }
};

const updateTestimonials = async (req, res) => {
  const { name, content, image } = req.body;
  const { id } = req.params;
  try {
    await updateTestimonial(name, content, image, id);
    res.status(200).send('Testimonial Updated');
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTestimonials = async (req, res, next) => {
  try {
    const { id } = req.params;
    await removeTestimonial(id);
    res.status(200).send('Testimonial Delete');
  } catch (error) {
    next(error);
  }
};

const getTestimonialbyId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const testimonial = await getTestimonialById(id);
    res.status(200).json({ testimonial });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  saveTestimonial,
  getAllTestimonials,
  updateTestimonials,
  deleteTestimonials,
  getTestimonialbyId,
};
