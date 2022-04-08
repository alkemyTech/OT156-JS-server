const express = require('express');
const {
  create,
  getById,
  getAll,
  update,
  remove,
} = require('../services/categoriesServices');

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
    if (!!category) {
      res.json({ category });
    } else {
      res.status(404).json({ error: 'Error something has happened' });
    }
  } catch (error) {
    next(error);
  }
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

const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const data = { name, description };
    const result = await update(id, data);
    if (result[0] === 1) {
      res.json({ msg: 'category update successful' });
    } else {
      throw new Error('Error updating category');
    }
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
  getCategoryById,
  getAllCategories,
  updateCategory,
  removeCategory,
};
