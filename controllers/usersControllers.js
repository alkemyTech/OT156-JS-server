const express = require('express');
const { update, remove,getAllForCamps,getById } = require('../services/usersServices');
const { dataUserToken } = require('../services/loginServices');

/**
 * Actualizacion de usuario en caso de ser el mismo usuario genera un nuevo token
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const updateUser = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const data = ({ firstName, lastName, email} = req.body);
    const resetToken = userId == id;
    const resUser = await update(id, data, resetToken);

    if (resetToken) {
      const newToken = dataUserToken(resUser);
      return res
        .status(200)
        .json({ msg: 'User updated successfully', user: newToken });
    }

    resUser[0] === 1
      ? res.status(200).json({ msg: 'User updated successfully' })
      : res.status(500).json({ msg: '!Oops something has happened' });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getById(id);
    user
      ? res.status(200).json({ user })
      : res.status(404).json({ msg: 'User not found' });
  } catch (error) {
    next(error);
  }
};


const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllForCamps();
    res.status(200).json({ users });
  } catch (error) {
      
    next(error);
  }
};

    

/**
 * Borrado logico de usuario
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
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById
};
