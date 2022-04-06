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
module.exports = {
  create,
};
