const { create, update, getAll, getActivityById,deleteActivity } = require("../services/activitiesServices");

const addActivity = async (req, res, next) => {
  try {
    const newActivity = await create(req.body);
    res.send(newActivity);
  } catch (err) {
    next(err);
  }
};
const updateActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedActivity = await update(req.body, id);
    if (!updatedActivity) {
      throw new Error("Activity not found");
    }
    return res.send(updatedActivity);
  } catch (err) {
    next(err);
  }
};

const getAllActivities = async (req, res, next) => {
  try {
    const activities = await getAll();
    if (!activities) {
      throw new Error("No activities found");
    }
    return res.send(activities);
  } catch (err) {
    next(err);
  }
};

const getOneActivity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const activity = await getActivityById(id);
    if (!activity) {
      throw new Error("Activity not found");
    }
    return res.send(activity);
  } catch (err) {
    next(err);
  }
};

const deleteActivityById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedActivity = await deleteActivity(id);
    if (!deletedActivity) {
      throw new Error("Activity not found");
    }
    res.json({ activity: 'Activity deleted' });
  } catch (err) {
    next(err);
  }
};


module.exports = {
  addActivity,
  updateActivity,
  getAllActivities, 
  getOneActivity,
  deleteActivityById
};
