'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('testimonials', [
      {
        name: "María",
        content: "Me encanta como trabajan en la ONG. Muy responsables y al servicio.",
        image:"https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aníbal",
        content: "Somos Más es un gran espacio para los chicos y muy positivo para las familias.",
        image:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Juan",
        content: "Gracias a la ONG mis hijos pueden desarrollarse mejor en la escuela.",
        image:"https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marta",
        content: "Me gusta la calidad de los vinculos que existe en Somos Más.",
        image:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
