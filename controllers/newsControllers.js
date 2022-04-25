const express = require('express');
const { createNews, getAll, updateById, getById, deleteNews } = require('../services/newsServices');

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const saveNews = async (req, res, next) => {
  const image = req.file ?? req.body.image;

  const { name, content, categoryId } = req.body;
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

const updateNews = async (req, res, next) => {
  const { name, content, categoryId } = req.body;
  const id = req.url.split('/')[1];
  const image = req.file ?? req.body.image;

  try {
    const entry = await updateById(name, content, image, categoryId, id);
    if (entry) {
      res.status(200);
      res.send({ entry });
    }
    else {
      res.status(404);
      res.send({ error: 'Not found' });
    }
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
};

const getNewsById = async (req, res, next) => {
  const id = req.url.split('/')[1];
  try {
    const entry = await getById(id);
    if (entry) {
      res.status(200);
      res.send({ entry });
    }
    else {
      res.status(404);
      res.send({ error: 'Not found' });
    }
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
};

const deleteNewsbyId = async (req, res, next) => {
  const id = req.url.split('/')[1];
  try {
    const entry = await deleteNews(id);
    if (entry) {
      res.status(200);
      res.send('News removed successfully');
    }
    else {
      res.status(404);
      res.send({ error: 'Not found' });
    }
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
};

module.exports = {
  saveNews, getNews, updateNews, getNewsById,deleteNewsbyId

};
