'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Slides', [
      {
        imageUrl: 'https://somosmas.org/wp-content/uploads/2018/03/procesos-innovadores.jpg',
        text: 'Procesos innovadores',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: 'https://somosmas.org/wp-content/uploads/2018/03/como-lo-hacemos.jpg',
        text: 'Como lo hacemos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: 'https://somosmas.org/wp-content/uploads/2018/03/historia.jpg',
        text: 'Historia',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};