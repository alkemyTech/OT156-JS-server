const { Contacts } = require('../models');

const saveContact = async (newContact) => {
  return await Contacts.create(newContact);
};

const getByIdContacts = async (id) => {
  return await Contacts.findByPk(id);
};

const getAllContacts = async () => {
  return await Contacts.findAll();
};

const updateContacts = async (id, data) => {
  return await Contacts.update(data, {
    where: { id },
  });
};

const removeContacts = async (id) => {
  return await Contacts.destroy({ where: { id } });
};

const existsEmailContacts = async (email) =>{
  return await Contacts.findAll({
    where: { email }
  })
}
module.exports = {
  saveContact,
  getByIdContacts,
  getAllContacts,
  updateContacts,
  removeContacts,
  existsEmailContacts
};
