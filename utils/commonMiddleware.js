const { validationResult } = require('express-validator');

const commonMiddleware = (req, res, next) => {
  try {
    validationResult(req).throw();
    next();
  } catch (errors) {
    res.status(403);
    res.json({ errors });
  }
};

module.exports = commonMiddleware;
