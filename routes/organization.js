var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    name :"ONG Somos más",
    image:"https://somosmas.org/wp-content/uploads/2018/02/nuevo-logo.png", 
    phone:"1160112988", 
    address:"Barrio la cava",
    welcomeText:"Somos una asociacion civil que se creo en 1997"
  });
});

module.exports = router;
