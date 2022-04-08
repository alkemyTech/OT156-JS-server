const express = require('express');

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const saveCategory = (req, res, next) => {
  res.json({});
};

const updateCategory = (req, res, next) => {
  try {
    res.json({});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  saveCategory,
  updateCategory,
};
