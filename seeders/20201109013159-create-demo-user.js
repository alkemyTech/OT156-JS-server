'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
    {
      firstName: 'Carlos',
      lastName: 'Acosta',
      email: 'acosta@gmail.com',
      password: 'CarlosAcos',
      roleId: 2,
      image: 'https://pixabay.com/get/gf065b383d19403256be34aac176a887c2c0a128f03ace5db72692e4cc1afdd4d75238416ad032e01ef641a999cf7861d18190d3526e7c0f22919ccebd426faea45617a2fb257890cc948ce51a0f61dfd_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Eira',
      lastName: 'Lise',
      email: 'eiral@gmail.com',
      password: 'Goal1557',
      roleId: 2,
      image: 'https://pixabay.com/get/gc2d2845d2628ef77e2a0d8db43737500b3bc2694feeafc8b9459989fd1db12c6c894af1404f9d526821888e7372129fd10108e4e5ed146b169e2d90129c78be9b0bc851f88a8fbdc7294db3b8a5c91c6_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Stella',
      lastName: 'Fedelm',
      email: 'fedel.ste@gmail.com',
      password: 'nume8812$',
      roleId: 2,
      image: 'https://pixabay.com/get/g7ca5989f34c3d023d7968b4b1b804a9c3e461e5ad4de90d8006b2377cf07eb6f92f58c524033f0aa21733e198e80946e798f73a87b539195e8a1efd57504181a7a0d305a0422932d550e9fd92baeaa95_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Monica',
      lastName: 'Antovich',
      email: 'serendAnt@gmail.com',
      password: 'BraT433$',
      roleId: 2,
      image: 'https://pixabay.com/get/g55b321d29e21920bd63383b2c7a08977a7f54917cbd488d2baea528ff10fe4cacf109a831d4da4f5dc16e24fdf7e994ecf644a4ea24d144a00191bdf201c5db752427952a83eee71e9c9ec537f7f5c83_640.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Mario',
      lastName: 'Anoel',
      email: 'mar.anoel@gmail.com',
      password: 'Futbol543N',
      roleId: 2,
      image: 'https://pixabay.com/get/gb44a5cdc7ca39632eddd9ec8c5614ba8d8619c2b239d0736beba47c50c4d4c2bc9f8bc6ee2c89cee8bc545de8b6a611023f99b6d350dc53692fa9232a35af2941ee77a9f2a24b0b3b4db4e3d2c5aae28_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Ramiro',
      lastName: 'Castro',
      email: 'rama_castro@gmail.com',
      password: 'RamCast432',
      roleId: 2,
      image: 'https://pixabay.com/get/g08fd305dda815250800dbedb1a0f82e24455d1c745b78170002342172e8961d56d2ab7c38192b34f2298c72ad854aa9d1dcf0714891d372611ddcf269816b7dae414ee57b885f5f0d0f9bc851e3436c5_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Camila',
      lastName: 'Palacios',
      email: 'camipala@gmail.com',
      password: 'Indio5D',
      roleId: 2,
      image: 'https://pixabay.com/get/g899f4ee27a7d5b0f21aaa6c530af7ead7f3946ac038535bbf170b587624cbfb4e8b35341ee06ffe870cccbf1bc575c707ecdb6a03a02c81e34bd8bf922a650e5fcb003d8f42cad5e96e3714e6378f586_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Fernando',
      lastName: 'Rios',
      email: 'fernan.43@gmail.com',
      password: 'UndertheSea',
      roleId: 2,
      image: 'https://pixabay.com/get/g78046622edd15ab0631f4bbc01a878769daced0ec1375713378ec7d369d9ae4e321d976ad3c3880fc348b080de82c8e8f50f0328ac63a4d6481ffcbfc9307b041eefbbc7bd3f65f09ebc9047edd8dd4b_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Marcela',
      lastName: 'Caamaño',
      email: 'caamaño.mar@gmail.com',
      password: 'MarceCAA',
      roleId: 2,
      image: 'https://pixabay.com/get/gfd8899878f9ad06e1a323f15c457a3f8fdf762994e599df45bc252477796a077e0291fdc61ba756a9217f8597d9ba7e1fbf547f84c89b81d09407bd077aa4093955f0d95e8882466cabda132f76d286e_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Claudio',
      lastName: 'Fernandez',
      email: 'fercla76@gmail.com',
      password: 'Se7eN$123',
      roleId: 2,
      image: 'https://pixabay.com/get/ge14fd5cdf94f343cc05434be0ccdb127dca95290d83f7c9e44183b63fa7b7cc833d99cea2b2abc3504bee2e8c3778e019459e5760a934ff3e2b1094e12af7cf38fcaf525b1231e94e3a33a7ed35597c9_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Santiago',
      lastName: 'De Lima',
      email: 'santilima@gmail.com',
      password: 'LimaSant125',
      roleId: 3,
      image: 'https://pixabay.com/get/g93c3fd5ebdb47fbb089649c63539822f6e48d10461f8b65b1b44ca679980a39d30425e62a41a7edd708135ceadb31e45c0cfa0843731262d758bdb528e7f7f077fde6c6754026d4bb15ca096e095fdca_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Martina',
      lastName: 'Medina',
      email: 'mmedina@gmail.com',
      password: 'BlackCat43$',
      roleId: 3,
      image: 'https://pixabay.com/get/g00dab338d30aee7d6824ae7bd15ea450eac6431e394ab0576750ab18273d6e77a2e2e50e42a8e92ef5dc71913209298ac4545dab882fb1c92fafe2d97d87d1ac6772186f4c4877492adb02100744000e_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Romina',
      lastName: 'Guzman',
      email: 'roguz.ro@gmail.com',
      password: 'Roguzroro',
      roleId: 3,
      image: 'https://pixabay.com/get/g65d757f635a39a8239aa87f05b882f6280985cb5a74f73ba4e88c7d78304091f10a430cfba2ad20c0ef855bc98a9a820854e60b2d7081198a6f41deb6389d1a676318ee714f62bced6830b6a7165e830_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Lautaro',
      lastName: 'Amendia',
      email: 'lau.amendia@gmail.com',
      password: 'Tres5585$',
      roleId: 3,
      image: 'https://pixabay.com/get/gd705b7e1310562b14baa480196d666e6cd6cb8eeed1a0a39064cdabc3fb90e08974922fafd673952af6286d8ab1028e10fa6ca7e4c4995277901d77134edf1cf70d44c50e84184d33dd903446cef05ba_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Maria',
      lastName: 'Lopez',
      email: 'mari.lo@gmail.com',
      password: 'Marilo6',
      roleId: 3,
      image: 'https://pixabay.com/get/g45bf6a75f10442459117612328db7f58c7c1278b18d190b88d7eb8739c45c37b9db81d50d072129406c8849ba8a89e285d55d761eeab4327673260543d239aff8d7cbb1fd95c67fb99f8d610137a2920_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Ruben',
      lastName: 'Manto',
      email: 'rumanto@gmail.com',
      password: 'Rum55881',
      roleId: 3,
      image: 'https://pixabay.com/get/g758045dc654b2044e36885f74ca6e11eb1c0615b1d045caccbff57c27054c39078ba4b6d4a22020c380e982120943ec39517ff9fcec50e56cc26b3226ea5a25dcf799f91b2e436fc8896e312f46dff56_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Evelin',
      lastName: 'Romero',
      email: 'eve_romero@gmail.com',
      password: 'Eve15Eve',
      roleId: 3,
      image: 'https://pixabay.com/get/g21e005768da428a0cc134092d815ace835ac483aba7797bf23f97e1f267755d6c87de09b2aceb369e21621dd83752b3476beef1a18d8428ffa4898782e7f761664c971f70cdb641f4b30fcb5649daeb8_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Horacio',
      lastName: 'Jalco',
      email: 'hora.jal@gmail.com',
      password: 'Hojal7748',
      roleId: 3,
      image: 'https://pixabay.com/get/g3992a0f14a1f423074a6c384eecfc8807b15365658172d691596a219f3e689a5e437d3ab0c0f4091b68b4cea215ecc35dee11ee911066324cb5d6b6127f99bfbdb1a72e33e80dfa6a1f34767fdbb5359_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Lucas',
      lastName: 'Petroni',
      email: 'petrolucas@gmail.com',
      password: 'Lupe_ge$',
      roleId: 3,
      image: 'https://pixabay.com/get/gcc50ad84ac2929352c6b1f6ff849d24230a9321898ee9ac8be414b3cddef660fd96ddf1037ec2477101b2707b2a5bce8ed4caa99e12a41713885b5c4fcd5755272177727e394295f45dc797fe146d0b9_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Ludmila',
      lastName: 'Deny',
      email: 'deny.ludmi@gmail.com',
      password: 'Ahora4316',
      roleId: 3,
      image: 'https://pixabay.com/get/gb3bbf9f489b94b9c30cf33a1a9d9a301e3b98422236e6c1adddb07422015f241b453ead0c0439f578ef9357ad5f829e8b8bfa52548cfdad4d18ec4a045fcf4ae07d2dc5ee2fe3e4d2d6b0e24734b1c41_640.jpg',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
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
