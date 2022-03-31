const express = require('express');
const { getAll } = require('../services/categoriesServices');

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const saveCategory = (req, res, next) => {
  res.json({});
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getAllCategories = async (req, res, next) => {
  try {
    const categories = await getAll();
    res.json({ categories });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  saveCategory,
  getAllCategories,
};
