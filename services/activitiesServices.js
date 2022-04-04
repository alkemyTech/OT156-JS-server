const { Activities } = require("../models");

const create = async ({ name, content, image, deletedAt }) => {
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
const update = (data, id) => {
  const updatedActivity = Activities.update(data, {
    where: { id },
  });
  if (!updatedActivity) {
    return null;
  }
  return updatedActivity;
};
module.exports = {
  create,
  update,
};
