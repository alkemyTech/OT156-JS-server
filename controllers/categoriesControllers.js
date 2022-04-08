const express = require('express');
const { create, getById, remove } = require('../services/categoriesServices');

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const saveCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const newCategory = { name, description };
    const category = await create(newCategory);
    res.json(category);
  } catch (error) {
    next(error);
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await getById(id);
    if (!!category) res.status(404).json({ error: user });
    res.json({ category });
  } catch (error) {
    next(error);
  }
};

const updateCategory = (req, res, next) => {
  try {
    res.json({});
  } catch (error) {
    next(error);
  }
};

const removeCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    await remove(id);
    res.json({ category: 'Category deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  saveCategory,
  updateCategory,
  getCategoryById,
  removeCategory,
};
