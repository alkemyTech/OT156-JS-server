const { Activities } = require("../models");

const createActivity = async ({ name, content, image, deletedAt }) => {
  try {
    const newActivity = {
      name,
      content,
      image,
      deletedAt,
    };
    const createdActivity = await Activities.create(newActivity);
    if (!createdActivity) {
      return null;
    }
    return createdActivity;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createActivity,
};
