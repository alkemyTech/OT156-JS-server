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

const updateById = async (name, content, image, categoryId, id) => {
    const entry = await Entries.findOne({
        where: { id }
    })
    if (entry) {
        return await entry.update({
            name,
            content,
            image,
            categoryId,
            type: 'news',
            deletedAt: null,
        })
    } else {
        return null
    }
}

const getById = async (id) => {
    return await Entries.findOne({
        where: { id }
    })
}


module.exports = {
    createNews, getAll, updateById,getById

};