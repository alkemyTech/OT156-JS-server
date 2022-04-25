const { Entries } = require('../models');
const uploadAWS = require('./awsService');

const createNews = async (name, content, image, categoryId) => {
    try {
        const url = await uploadAWS(name, image);
        const newEntry = {
            name,
            content,
            image: url,
            categoryId,
            type: 'news',
            deletedAt: null,
        };
        const createdEntry = await Entries.create(newEntry);
        if (!createdEntry) {
            return null;
        }
        return createdEntry;
    } catch (error) {
        throw error;
    }
};

const getAll = async () => {
    return await Entries.findAll({
        attributes: [
            'id',
            'name',
            'image',
            'createdAt',
            'content'
        ],
        where: {
            type: 'news',
            deletedAt: null
        }
    })
}

const updateById = async (name, content, image, categoryId, id) => {
    if (typeof image === 'string') {
        const updateEntry = {
            name,
            content,
            image,
            categoryId,
        };

        const updatedEntry = await Entries.update(updateEntry, {
            where: { id },
        });
        if (!updatedEntry) {
            return null;
        }
        return updatedEntry;
    } else {
        const url = await uploadAWS(name, image);
        const updateEntry = {
            name,
            content,
            image: url,
            categoryId,
        };

        const updatedEntry = await Entries.update(updateEntry, {
            where: { id },
        });
        if (!updatedEntry) {
            return null;
        }
        return updatedEntry;
    }
}

const getById = async (id) => {
    return await Entries.findOne({
        where: { id }
    })
}

const deleteNews = async (id) => {
    const entry = await Entries.findOne({
        where: { id }
    })
    if (entry) {
        return await entry.update({
            deletedAt: new Date()
        })
    } else {
        return null
    }
}


module.exports = {
    createNews, getAll, updateById, getById, deleteNews

};