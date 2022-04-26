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

const update = async ({ name, content, deletedAt, image, id }) => {
  if (typeof image === 'string') {
    const updateActivity = {
      name,
      content,
      image,
      deletedAt,
    };

    const updatedActivity = Activities.update(updateActivity, {
      where: { id },
    });
    if (!updatedActivity) {
      return null;
    }
    return updatedActivity;
  } else {

    const url = await uploadAWS(name, image);
    const updateActivity = {
      name,
      content,
      image: url,
      deletedAt,
    };

    const updatedActivity = Activities.update(updateActivity, {
      where: { id },
    });
    if (!updatedActivity) {
      return null;
    }
    return updatedActivity;
  }

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
