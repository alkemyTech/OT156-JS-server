const { Organization } = require('../models');
const uploadAWS = require('./awsService');

const updateById = async ( name, image, phone, address, welcomeText, id) => {
    if (typeof image === 'string'){
        const updateEntry = {
            name,
            image,
            phone,
            address,
            welcomeText,
        };
        const updatedEntry = await Organization.update(updateEntry, {
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
            image: url,
            phone,
            address,
            welcomeText,
        };
        const updatedEntry = await Organization.update(updateEntry, {
            where: { id },
        });
        if (!updatedEntry) {
            return null;
        }
        return updatedEntry;
    }
}

const getById = async (id) => {
    return await Organization.findOne({
        where: { id }
    })
}


module.exports = {
    updateById,
    getById
}; 