'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Deportes',
        description: 'Deportes',
        deletedAt: null,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Actividades',
        description: 'Actividades',
        deletedAt: null,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Social',
        description: 'Social',
        deletedAt: null,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Recreativo',
        description: 'Recreativo',
        deletedAt: null,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Salud',
        description: 'Salud',
        deletedAt: null,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Campañas',
        description: 'Campañas',
        deletedAt: null,
        createdAt: new Date,
        updatedAt: new Date
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
