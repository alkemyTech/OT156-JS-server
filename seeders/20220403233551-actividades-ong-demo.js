'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Activities', [
        {
          id: "",
          name: "",
          image: "",
          content: "",
          deletedAt: ""
        },
        {
          id: "",
          name: "",
          image: "",
          content: "",
          deletedAt: ""
        },
        {
          id: "",
          name: "",
          image: "",
          content: "",
          deletedAt: ""
        },        {
          id: "",
          name: "",
          image: "",
          content: "",
          deletedAt: ""
        },        {
          id: "",
          name: "",
          image: "",
          content: "",
          deletedAt: ""
        },        {
          id: "",
          name: "",
          image: "",
          content: "",
          deletedAt: ""
        },        {
          id: "",
          name: "",
          image: "",
          content: "",
          deletedAt: ""
        },        {
          id: "",
          name: "",
          image: "",
          content: "",
          deletedAt: ""
        },        {
          id: "",
          name: "",
          image: "",
          content: "",
          deletedAt: ""
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
