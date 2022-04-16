const { Testimonials } = require('../models');

const createTestimonials = async (name, content, image ) => {
    return await Testimonials.create({
        name,
        content,
        image
      })
};

module.exports = {
    createTestimonials
};