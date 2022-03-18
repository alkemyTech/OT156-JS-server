var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  const {email, password} = req.body
  
  res.send(data);
});

module.exports = router;
