const testimonials = require('../models/testimonials');

const createTestimonials = async (name, content, image ) => {
    return await testimonials.create({
        name,
        content,
        image
      })
};


const getTestimonialById = async (id) => {
    return await testimonials.findByPk( id );
  };

const removeTestimonialsById = async (id) => {
    return await testimonials.destroy( { where: { id } });
};
  
module.exports = {
    createTestimonials,
    getTestimonialById,
    removeTestimonialsById
};