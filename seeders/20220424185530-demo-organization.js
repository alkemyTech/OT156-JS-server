'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Organizations', [
      {
        name: 'ONG Somos más',
        image: 'https://somosmas.org/wp-content/uploads/2018/02/nuevo-logo.png',
        phone: 1160112988,
        address:  'Barrio la cava',
        welcomeText: 'Somos una asociacion civil que se creo en 1997',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
