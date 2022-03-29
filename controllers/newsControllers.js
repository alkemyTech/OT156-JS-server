const express = require('express');
const db = require('../models');

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const saveNews = async (req, res, next) => {
  const { name, content, image, categoryId } = req.body;
  try {
    const entry = await db.Entries.create({
      name,
      content,
      image,
      categoryId,
      type: 'news',
      deletedAt: null,
    })
    res.status(200);
    res.send({ entry });
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
};

module.exports = {
  saveNews,
};