var express = require('express');
const {
  updateOrganization,
  getOrganizationById
} = require('../controllers/organizationControllers');
const validatorAdmin = require('../middlewares/adminMiddlewares');
const multer = require('multer');

var router = express.Router();
const upload = multer();

router.get('/1/public', function (req, res, next) {
  res.json({
    name: 'ONG Somos más',
    image: 'https://somosmas.org/wp-content/uploads/2018/02/nuevo-logo.png',
    phone: '1160112988',
    address: 'Barrio la cava',
    welcomeText: 'Somos una asociacion civil que se creo en 1997',
    Facebook: {
      userName: 'Somos_Más',
      link: 'https://www.facebook.com/Somos_M%C3%A1s',
    },
    Instagram: {
      userName: 'SomosMás',
      link: 'https://www.instagram.com/SomosM%C3%A1s',
    },
    navLink: [
      { name: 'Inicio', link: '/' },
      { name: 'Nosotros', link: '/nosotros' },
      { name: 'Actividades', link: '/actividades' },
      { name: 'Novedades', link: '/news' },
      { name: 'Testimonios', link: '/testimonios' },
      { name: 'Contacto', link: '/contacto' },
      { name: 'Contribuye', link: '/contribuye' },
    ],
  });
});

router.put('/:id', upload.single('image'), validatorAdmin, updateOrganization);
router.get('/:id', getOrganizationById);

module.exports = router;
