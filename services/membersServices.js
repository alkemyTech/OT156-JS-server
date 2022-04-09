const  { members } = require('../models');


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
};

const create = async (name) => {
  try {
    const newMember = {
      name,
    };
    const memberCreated = await members.create(newMember);
    return memberCreated;
  } catch (error) {
    throw error;
  }
};

const deleteMember = async (id) => {
  try {
    const memberDeleted = await members.destroy({
      where: {
        id,
      },
    });
    if (!memberDeleted) {
      return 500;
    }
    return 200;
  } catch (error) {
    throw error;
  }
};

const updateMember = async (id, name, image) => {
  try {
    const memberUpdated = await members.update(
      { name, image },
      {
        where: {
          id,
        },
      }
    );
    if (memberUpdated[0] === 0) {
      return 500;
    }
    return 200;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  deleteMember,
  updateMember,
  getAllServices,
};
