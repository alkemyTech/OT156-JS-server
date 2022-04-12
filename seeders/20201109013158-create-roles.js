'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Admin',
        description: 'Usuario administrador',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Standard',
        description: 'Usuario Standard',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Regular',
        description: 'Usuario Regular',
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
