const express = require('express');
const {
  saveContact,
  getAllContacts

} = require('../services/contactsServices.js');

const getAllContactsinfo = async (req, res) => {
  const all = await getAllContacts()
  res.send(all);
};

const createContact = async ( req, res, next) => {
    try {
      const { name, phone, email, message  } = req.body;
      const newContact = { name, phone, email, message };
      const contact = await saveContact(newContact);
      res.json(contact);
    } catch (error) {
      next(error);
    }
  };

module.exports = { 
  getAllContactsinfo,
  createContact
};
