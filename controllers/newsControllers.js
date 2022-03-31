const express = require('express');
const {createNews,getAll} = require('../services/newsServices');
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const saveNews = async (req, res, next) => {
  const { name, content, image, categoryId } = req.body;
  try {
    const entry = await createNews(name, content, image, categoryId)
    res.status(200);
    res.send({ entry });
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
};


const getNews = async (req, res, next) => {
  try {
    const entries = await getAll();
    res.status(200);
    res.send({ entries });
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
};

module.exports = {
  saveNews,getNews
};
