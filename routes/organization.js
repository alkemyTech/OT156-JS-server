var express = require('express');
const { updateOrganization } = require('../controllers/organizationControllers');
const validatorOrganization = require('../middlewares/organizationMiddlewares');
var router = express.Router();

router.get( '/1/public' , function( req , res , next ) {
  res.json( {
    name: "ONG Somos más" ,
    image: "https://somosmas.org/wp-content/uploads/2018/02/nuevo-logo.png" , 
    phone: "1160112988" , 
    address: "Barrio la cava" ,
    welcomeText: "Somos una asociacion civil que se creo en 1997",
    Facebook: "Somos_Más",
    Instagram: "SomosMás"
  } ) ;
} ) ; 

router.put( "/:id" , validatorOrganization , updateOrganization ) ;


module.exports = router;
