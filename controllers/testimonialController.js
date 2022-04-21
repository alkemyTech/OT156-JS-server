const {
  createTestimonials,
  updateTestimonial,
} = require("../services/testimonialsServices");

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

const updateTestimonials = async (req, res) => {
  const { name, content, image } = req.body;
  const { id } = req.params;
  try {
    await updateTestimonial(name, content, image, id);
    res.status(200).send("Testimonial Updated");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  saveTestimonial,
  updateTestimonials,
};
