const { Slides } = require("../models");
const uploadAWS = require('./awsService');

const getAll = () => {
    try {
        return Slides.findAll({});
    } catch (error) {
        throw error;
    }
};

const update = async (text, imageUrl, id) => {
    if (typeof imageUrl === 'string') {
        const updateSlide = {
            imageUrl,
            text,
        };
        const updatedSlide = await Slides.update(updateSlide, {
            where: { id },
        });
        if (!updatedSlide) {
            return null;
        }
        return updatedSlide;
    } else {
        const url = await uploadAWS(text, imageUrl);
        const updateSlide = {
            imageUrl: url,
            text,
        };
        const updatedSlide = await Slides.update(updateSlide, {
            where: { id },
        });
        if (!updatedSlide) {
            return null;
        }
        return updatedSlide;
    }
};

const getById = async (id) => {
    return await Slides.findOne({ where: { id } });
};

const remove = async (id) => {
    return await Slides.destroy({ where: { id } });
};

const create = async (imageUrl, text) => {
    try {
        const url = await uploadAWS(text, imageUrl);
        const newSlide = {
            imageUrl: url,
            text,
        };
        const createdSlide = await Slides.create(newSlide);
        if (!createdSlide) {
            return null;
        }
        return createdSlide;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAll,
    update,
    getById,
    remove,
    create
};
