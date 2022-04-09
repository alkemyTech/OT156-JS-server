const { testimonials } = require('../models');

const createTestimonials = async (name, content, image ) => {
    return await testimonials.create({
        name,
        content,
        image
      })
};

module.exports = {
    createTestimonials
};