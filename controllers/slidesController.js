const { getAll, update, getById, remove, create } = require('../services/slidesServices');

const getAllSlides = async (req, res, next) => {
  try {
    const slides = await getAll();
    res.status(200);
    res.send({ slides });
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
};

const updateSlides = async (req, res) => {
  const imageUrl = req.file ?? req.body.imageUrl;
  const { text } = req.body;
  const { id } = req.params;
  try {
    await update(text, imageUrl, id);
    res.status(200).send('Slides Updated');
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSlidesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const slide = await getById(id);
    res.status(200).json({ slide });
  } catch (error) {
    next(error);
  }
};

const deleteSlide = async (req, res, next) => {
  try {
    const { id } = req.params;
    await remove(id);
    res.status(200).send('Slides Delete');
  } catch (error) {
    next(error);
  }
};

const saveSlides = async (req, res, next) => {
  const imageUrl = req.file ?? req.body.imageUrl;

  const { text } = req.body;
  try {
    const slide = await create(imageUrl, text);
    res.status(200);
    res.send({ slide });
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
};

module.exports = {
  getAllSlides,
  updateSlides,
  getSlidesById,
  deleteSlide,
  saveSlides
};
