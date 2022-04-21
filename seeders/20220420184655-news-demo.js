'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Entries', [
      {
        name: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis tellus nec tellus sollicitudin consectetur. Suspendisse rhoncus, ligula ac posuere sodales, mauris dolor hendrerit dui, non sollicitudin massa elit id eros. Praesent gravida cursus justo, vel malesuada nibh hendrerit eget. Vestibulum odio felis, fringilla accumsan laoreet ut, luctus et sem. Vivamus sed eros sapien. Quisque et dui quis massa convallis ullamcorper ac vitae augue. Donec porta sapien ut elit finibus, eget rutrum elit malesuada. Pellentesque non viverra lacus. Maecenas posuere, mauris blandit dictum rutrum, est mauris rhoncus ex, quis varius ipsum magna non orci. Pellentesque vitae tempus arcu, sit amet volutpat mauris. Quisque efficitur varius accumsan. Praesent vitae lacinia neque.',
        image: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80',
        categoryId: 6,
        type: 'news',
        deletedAt: null
      },
      {
        name: 'Juntos por el Poder Colectivo',
        content: '<p>Durante más de 15 años el constante trabajo por fortalecer el trabajo colectivo ha llevado a Somos Más por los rincones más hermosos e inesperados de Colombia. Nos ha permitido luchar por el derecho que tienen los niños, niñas y adolescentes a que su voz sea escuchada, nos ha llevado a ser parte importante de la construcción colectiva y el crecimiento de la estrategia Estado Abierto en Colombia; nos ha puesto en el camino de la innovación social y en ella hemos encontrado formas disruptivas de catalizar procesos maravillosos de diálogos sociales que transforman las realidades de nuestros país.</p><p>Hoy nos enfrentamos a un reto a nivel mundial, reto en que la palabra colectivo amenaza la salud de miles de millones de personas en todo el mundo. En este momento que la epidemia causada por el COVID 19 nos obliga a quedarnos en casa con nuestras familias y seres queridos estamos aún más convencidos de que debemos activar el poder de la construcción colectiva para reinventar las formas en que nos relacionaremos, la manera en que habitamos nuestro territorio y los innovadores caminos en que reconstruiremos nuestras sociedades.</p><p>Es por ello que hoy Somos Más lanza la campaña JUNTOS POR EL PODER COLECTIVO, con la cual lograremos fortalecer nuestra organización para superar esta época y reinventar colectivamente muchas de las estrategias y metodologías que implementaremos para aportar a la reconstrucción de nuestro país.</p><p>Ingresa a<a href=\"https://vaki.co/vaki/podercolectivo\"> https://vaki.co/vaki/podercolectivo</a>&nbsp;</p>',
        image: 'https://i0.wp.com/somosmas.org/wp-content/uploads/2020/04/vaki-1.jpg?resize=1080%2C438&ssl=1',
        categoryId: 6,
        type: 'news',
        deletedAt: null
      },
      {
        name: '¡Llega a Colombia la tercera edición del FITS!',
        content: '<p>Wingu trae nuevamente a Bogotá el Festival de Innovación y Tecnología Social FITS, una<br>jornada de capacitación para encontrar, articular y compartir todos los conocimientos a<br>través de herramientas tecnológicas que ayudan a las organizaciones de la sociedad civil<br>en su trabajo diario.</p><p>La tercera edición en Colombia será el 29 de Octubre en el Auditorio Félix Restrepo, en la<br>Pontificia Universidad Javeriana. Contaremos con cuatro espacios que funcionarán en<br>simultáneo con distintas dinámicas abordando los temas que actuarán de manera<br>transversal durante todo el día.</p><p>La tecnología puede facilitar el trabajo de las organizaciones sociales, y es aliada para<br>ahorrar tiempo y recursos en el trabajo diario. La innovación como una posibilidad para<br>encontrar soluciones sencillas con herramientas ya existentes. La articulación entre<br>organizaciones que trabajan una misma temática u organismos públicos o privados<br>puede fortalecer y complementar el trabajo de las organizaciones sociales con<br>tecnología cívica.</p><p>Algunos de los temas de este año serán: Datos y tecnología cívica, bases de datos y CRM,<br>metodologías ágiles, comunicación y campañas online, tendencias digitales, género y<br>tecnología, seguridad digital, recaudación de fondos, voluntariado y un montón de<br>sorpresas más, Las organizaciones o personas que quieran hacer parte del Festival se<br>pueden inscribir gratuitamente ingresando a: <a href=\"http://bit.ly/InscribeteALFITScol\">http://bit.ly/InscribeteALFITScol</a></p>',
        image: 'https://i0.wp.com/somosmas.org/wp-content/uploads/2018/10/FITS-1.png',
        categoryId: 6,
        type: 'news',
        deletedAt: null
      },
      {
        name: 'PROMUEVE LA GARANTÍA DE LOS DERECHOS DE LOS NIÑOS, NIÑAS Y ADOLESCENTES, ¡COLOMBIA ESCUCHA TU VOZ!',
        content: '<p>Con el objetivo de desarrollar acciones de movilización e impacto social para la incidencia en planes de Gobierno, planes de desarrollo, y políticas públicas a favor de la niñez y la adolescencia en Colombia, durante el mes de enero del presente año se realiza la consulta “Colombia escucha tu voz”.</p><p>La meta es recopilar y sistematizar la opinión de 12.000 niñas, niños y adolescentes entre 4 y 17 años, a nivel nacional, sobre temas como: vida y desarrollo, participación infantil, recursos para la niñez y prevención de violencias, a través de una estrategia que cuenta con un componente presencial, y un componente virtual de alcance nacional. A nivel presencial, se realizarán 105 talleres en 21 municipios para generar un ambiente de comunicación y confianza, de manera que los niños, niñas y adolescentes participantes cuenten cómo viven sus derechos y cuál es su percepción sobre la garantía de los mismos. A nivel virtual, se plantearán varias preguntas de selección múltiple y una pregunta abierta sobre los mismos temas, a través de una estrategia de Gestión Colectiva de Ideas.</p><p>La consulta virtual estará disponible hasta el 9 de febrero de 2018, para que niños, niñas y adolescentes participen de manera virtual ingresando a la página <a href=\"http://www.colombiaescuchatuvoz.co/\">www.colombiaescuchatuvoz.co</a>, un espacio creado para conocer la opinión de los niños, niñas y adolescentes sobre el estado de la garantía de sus derechos.</p><p><strong>Municipios focalizados para la consulta presencial:&nbsp;</strong>Quibdó, Nóvita, Montería, Tierralta, Montelíbano, Puerto Asís, Mocoa, San Vicente del Caguán, Inza, Páez, Sincelejo, Tumaco, Barbacoas, Manaure, Riohacha, Uribia, Leticia, Puerto Nariño, Soacha, Bogotá y Medellín.</p><p>Para lograr la meta, este proceso requiere de la colaboración activa de todos, comparta esta información con los niños, niñas y adolescentes de su comunidad, y ayúdenos a que participen en la consulta virtual. Aportemos al fortalecimiento de la niñez y la adolescencia en Colombia.</p>',
        image: 'https://i0.wp.com/somosmas.org/wp-content/uploads/2018/02/27067176_1914361545271622_52931177194889040_n.jpg',
        categoryId: 6,
        type: 'news',
        deletedAt: null
      },
      {
        name: 'COLOMBIA ARTICULA ESFUERZOS HACIA LA CONSOLIDACIÓN DE UN GOBIERNO ABIERTO',
        content: '<p>El III Plan de Acción de la AGA para el periodo 2017-2019, se construyó a partir de los aportes y recomendaciones del Comité de Seguimiento del Plan de Acción, del cual la Corporación Somos Más hace parte, y del Mecanismo de Revisión Independiente de la Alianza que identificaron dos necesidades fundamentales: la primera, ampliar la participación ciudadana hacia nuevos actores provenientes de la academia y del sector privado; y la segunda, consolidar la iniciativa de Estado Abierto a nivel subnacional. Este III Plan de Acción responde a dichas necesidades de país en términos de lograr un Estado Abierto.</p><p>Para su construcción, durante el primer semestre de 2017, se realizaron 41 Mesas de Trabajo presenciales y virtuales en las que participaron cerca de 80 representantes de cada uno de los sectores del orden nacional y subnacional (Gobierno Nacional, sociedad civil, academia y sector privado), con el propósito de aportar insumos para la formulación de los 25 compromisos, y para la estrategia de acción y seguimiento. El proceso fue coordinado por la Secretaría de Transparencia de la Presidencia de la República y organizaciones de la sociedad civil que hacen parte de la Alianza.</p><p>En el marco de esta Alianza, “Colombia, hacia un Estado Abierto” es el documento que recoge los compromisos del Gobierno Nacional y de seis gobiernos subnacionales, que confirman su voluntad política en la creación e implementación de acciones concretas que le permitan al país avanzar hacia un estado más abierto y, por lo tanto, garantizar la participación efectiva de los ciudadanos.</p><p>La Alianza de Gobierno Abierto es una iniciativa multilateral voluntaria en la que participan más de 60 países, que busca mejorar el desempeño gubernamental, fomentar la participación efectiva y mejorar la capacidad de respuesta de los gobiernos hacia sus ciudadanos, mediante la implementación de estrategias en materia de transparencia, acceso a la información, participación ciudadana y uso de nuevas tecnologías, que logren generar cambios concretos y visibles. Esta se consolidó en septiembre de 2011, y Colombia forma parte de ella desde 2012.</p>',
        image: 'https://i0.wp.com/somosmas.org/wp-content/uploads/2018/01/Prisma-2.jpg',
        categoryId: 6,
        type: 'news',
        deletedAt: null
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
