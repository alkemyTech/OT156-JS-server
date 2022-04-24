const express = require('express');
const { updateById,getById } = require('../services/organizationServices');


const updateOrganization = async (req, res, next) => {
  const { name, image, phone, address, welcomeText } = req.body;
  const { id } = req.params;
  try {
    const organization = await updateById( name, image, phone, address, welcomeText , id );
    if ( organization ) {
      res.status( 200 );
      res.send({ organization });
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

const getOrganizationById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const organization = await getById( id );
    if ( organization ) {
      res.status( 200 );
      res.send({ organization });
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
  getOrganizationById
};
