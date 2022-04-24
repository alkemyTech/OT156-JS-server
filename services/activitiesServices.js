const { Activities } = require('../models');
const uploadAWS = require('./awsService');

const create = async ({ name, content, image, deletedAt }) => {
  try {
    const url = await uploadAWS(name, image);
    const newActivity = {
      name,
      content,
      image: url,
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

const getAll = () => {
  try {
    return Activities.findAll({});
  } catch (error) {
    throw error;
  }
};

const getActivityById = (id) => {
  try {
    return Activities.findOne({
      where: {
        id,
      },
    });
  } catch (error) {
    throw error;
  }
};

const update = (data, id) => {
  const updatedActivity = Activities.update(data.body, {
    where: { id },
  });
  if (!updatedActivity) {
    return null;
  }
  return updatedActivity;
};

const deleteActivity = (id) => {
  const deletedActivity = Activities.destroy({
    where: { id },
  });
  if (!deletedActivity) {
    return null;
  }
  return deletedActivity;
};

module.exports = {
  create,
  update,
  getAll,
  getActivityById,
  deleteActivity,
};
