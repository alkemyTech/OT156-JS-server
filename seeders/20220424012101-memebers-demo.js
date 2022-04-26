'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Members', [
      {
        name: 'Cecilia Mendez',
        image: 'https://github.com/alkemyTech/OT156-JS-client/blob/dev/src/assets/members/Cecilia%20Mendez.jpeg?raw=true',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Marco Fernandez',
        image: 'https://github.com/alkemyTech/OT156-JS-client/blob/dev/src/assets/members/Marco%20Fernandez.jpg?raw=true',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Marita Gomez',
        image: 'https://github.com/alkemyTech/OT156-JS-client/blob/dev/src/assets/members/Marita%20Gomez.jpeg?raw=true',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'María Garcia',
        image: 'https://github.com/alkemyTech/OT156-JS-client/blob/dev/src/assets/members/Mar%C3%ADa%20Garcia.jpg?raw=true',
        createdAt: new Date,
        updatedAt: new Date
      }, {
        name: 'María Irola',
        image: 'https://github.com/alkemyTech/OT156-JS-client/blob/dev/src/assets/members/Mar%C3%ADa%20Irola.jpg?raw=true',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Miriam Rodriguez',
        image: 'https://github.com/alkemyTech/OT156-JS-client/blob/dev/src/assets/members/Miriam%20Rodriguez.jpg?raw=true',
        createdAt: new Date,
        updatedAt: new Date
      }, 
      {
        name: 'Rodrigo Fuente',
        image: 'https://github.com/alkemyTech/OT156-JS-client/blob/dev/src/assets/members/Rodrigo%20Fuente.jpg?raw=true',
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
