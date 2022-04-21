const { testimonials } = require("../models");

const createTestimonials = async (name, content, image) => {
  return await testimonials.create({
    name,
    content,
    image,
  });
};

const updateTestimonial = async (name, content, image, id) => {
  return await testimonials.update({ name, content, image }, { where: { id } });
};
module.exports = {
  createTestimonials,
  updateTestimonial,
};
