const { testimonials } = require('../models');

const createTestimonials = async (name, content, image) => {
  return await testimonials.create({
    name,
    content,
    image,
  });
};

const getAllTestimonial = async () => {
  return await testimonials.findAll();
};

const updateTestimonial = async (name, content, image, id) => {
  return await testimonials.update({ name, content, image }, { where: { id } });
};

const removeTestimonial = async (id) => {
  return await testimonials.destroy({ where: { id } });
};

module.exports = {
  createTestimonials,
  getAllTestimonial,
  updateTestimonial,
  removeTestimonial,
};
