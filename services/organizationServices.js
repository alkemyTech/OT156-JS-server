const { Organization } = require('../models');


const updateById = async ( name, image, phone, address, welcomeText, id) => {
    const organization = await Organization.findOne({
        where: { id }
    })
    if (organization) {
        return await organization.update({
            name,
            image,
            phone,
            address,
            welcomeText,
            deletedAt: null,
        })
    } else {
        return null
    }
}

module.exports = {
    updateById
}; 