const express = require('express');
const { createTestimonials, removeTestimonialsById } = require('../services/testimonialsServices');

const saveTestimonial = async ( req, res, next ) => {
    const { name, content, image } = req.body;
    try {

      const entry = await createTestimonials( name, content, image )
      res.status( 200 );
      res.send( { entry } );
    } catch ( error ) {
      res.status(500);
      res.send( { error } );
    }
};

const deleteTestimonialbyId = async (req, res, next) => {
  const id = req.url.split('/')[1];
  try {
    const entry = await removeTestimonialsById(id);
    if (entry) {
      res.status(200);
      res.send('Testimonials removed successfully');
    }
    else {
      res.status(404);
      res.send({ error: 'Not found' });
    }
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
};



module.exports = {
    saveTestimonial,
    deleteTestimonialbyId
};
