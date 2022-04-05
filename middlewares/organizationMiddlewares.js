const { check, validationResult } = require('express-validator');
const { Organization } =require('../models/organization');

const validatorOrganization = [
  check('id' , "Id is required" ).exists().isNumeric(),
  //validar si la Id existe en el contexto
  check('id' , "Id not valid").custom(value =>{
    return Organization.findOne(
      { where: { id : value}})
      .then(( res ) => {
        if (!res){
          return Promise.reject("ID not exist");
        }      
      })
  }),
  check('name', 'Name is required').exists().notEmpty(),
  check('name', 'Name must be string').isString(),
  check('image', "").exists().notEmpty(),
  check('phone',"").exists().isNumeric(),
  check('address',"").exists(),
  check('welcomeText',"").exists(),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      next();
    } catch (errors) {
      res.status(403);
      res.send({ errors });
    }
  },
];

module.exports = validatorOrganization;
