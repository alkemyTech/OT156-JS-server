'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Activities', [
        {
          name: "Actividad Educacion y trabajo",
          image: "https://www.aucal.edu/blog/servicios-sociales-comunidad/wp-content/uploads/2021/03/BLOG_Noticias-Aucal-19-820x410.jpg",
          content: " El grupo de Educación y Trabajo busca posicionarse como un espacio de referencia en la temática.",
        },
        {
          name: "Taller de madera",
          image: "https://eduso.net/res/wp-content/uploads/imgCK/images/FP-Madera-1r.jpg",
          content: "La integración en la estructura social pasa por disponer de estabilidad en la obtención de recursos económicos suficientes.",
        },
        {
          name: "Integracion de sociedad 2",
          image: "https://parquesalegres.org/wp-content/uploads/2018/03/importancia-inte-soci-1170x500.jpg",
          content: "Como personas que habitamos en nuestras comunidades, ciudades y países es normal poder convivir con otras personas a nuestro alrededor.",
        },
        {
          name: "Integracion de sociedad 3",
          image: "https://parquesalegres.org/wp-content/uploads/2018/03/importancia-inte-soci-1170x500.jpg",
          content: "Como personas que habitamos en nuestras comunidades, ciudades y países es normal poder convivir con otras personas a nuestro alrededor.",
        },
        {
          name: "Integracion de sociedad 4",
          image: "https://parquesalegres.org/wp-content/uploads/2018/03/importancia-inte-soci-1170x500.jpg",
          content: "Como personas que habitamos en nuestras comunidades, ciudades y países es normal poder convivir con otras personas a nuestro alrededor.",
        },
        {
          name: "Integracion de sociedad 5",
          image: "https://parquesalegres.org/wp-content/uploads/2018/03/importancia-inte-soci-1170x500.jpg",
          content: "Como personas que habitamos en nuestras comunidades, ciudades y países es normal poder convivir con otras personas a nuestro alrededor.",
        },

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
