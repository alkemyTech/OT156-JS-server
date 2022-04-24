'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('testimonials', [
      {
        name: "María",
        content: "Me encanta como trabajan en la ONG. Muy responsables y al servicio.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aníbal",
        content: "Somos Más es un gran espacio para los chicos y muy positivo para las familias.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Juan",
        content: "Gracias a la ONG mis hijos pueden desarrollarse mejor en la escuela.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marta",
        content: "Me gusta la calidad de los vinculos que existe en Somos Más.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
