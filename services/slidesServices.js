const { Slides } = require("../models");

const getAll = () => {
    try {
        return Slides.findAll({});
    } catch (error) {
        throw error;
    }
};

const update = async (imageUrl, text, id) => {
    return await Slides.update({ imageUrl, text }, { where: { id } });
};

const getById = async (id) => {
    return await Slides.findOne({ where: { id } });
};

const remove = async (id) => {
    return await Slides.destroy({ where: { id } });
};

const create = async (imageUrl, text) => {
    return await Slides.create({
        imageUrl,
        text
    });
};

module.exports = {
    getAll,
    update,
    getById,
    remove,
    create
};
