const { members } = require("../models");

const create = async (name) => {
  try {
    const newMember = {
      name,
    };
    const memberCreated =
      typeof name === "string"
        ? await members.create(newMember)
        : "must be a string";
    if (!memberCreated) {
      return null;
    }
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
};
