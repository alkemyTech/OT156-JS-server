const express = require('express');
const { remove } = require('../services/usersServices');

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resUser = await remove(id);
    res.json(resUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  deleteUser,
};
