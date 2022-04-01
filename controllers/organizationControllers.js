const express = require('express');
const { updateById } = require('../services/organizationServices');


const updateOrganization = async (req, res, next) => {
  const { name, image, phone, address, welcomeText } = req.body;
  const id = req.url.split('/')[1];
  try {
    const valor = await updateById( name, image, phone, address, welcomeText , id );
    if ( valor ) {
      res.status( 200 );
      res.send({ valor });
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
  updateOrganization,
};
