const express = require('express');
const {getAll} = require('../services/adminServices');
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAll();
        res.json({users});
    } catch (err) {
        res.status(500);
        res.json({err});
    }
}
module.exports ={
    getAllUsers
}