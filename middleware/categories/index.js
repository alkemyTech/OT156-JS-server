//  valida el campo name, y el mismo sea un string
const validCategories = (req, res, next) => {
  try {
    const { name } = req.body;

    if (name && typeof name === 'string') next();

    throw Error('Name is required');
  } catch (err) {
    next(err);
  }
};

module.exports = validCategories;
