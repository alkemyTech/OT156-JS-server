const { members } = require('../models');


const getAllServices = async () => {

    return await members.findAll({
        attributes: [
            'id',
            'name',
            'image'
        ],
        where: {
            type: 'members',
        }
    })
}

module.exports = {
    getAllServices
};