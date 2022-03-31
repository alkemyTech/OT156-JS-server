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

const getAll = async () => {
    return await Entries.findAll({
        attributes: [
            'id',
            'name',
            'image',
            'createdAt'
        ],
        where: {
            type: 'news',
        }
    })
}


module.exports = {
    createNews, getAll
};