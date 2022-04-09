const express = require('express');
const { createTestimonials } = require('../services/testimonialsServices');

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

module.exports = {
    saveTestimonial,
};
