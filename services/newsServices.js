const { Entries } = require('../models');

const createNews = async (name, content, image, categoryId) => {
    return await Entries.create({
        name,
        content,
        image,
        categoryId,
        type: 'news',
        deletedAt: null,
      })
};

module.exports = {
    createNews
};