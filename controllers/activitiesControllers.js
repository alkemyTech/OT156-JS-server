const {
  create,
  update,
  getAll,
  getActivityById,
  deleteActivity,
} = require('../services/activitiesServices');

const addActivity = async (req, res, next) => {
  try {
    const image = req.file ?? req.body.image;
    // const fileType = req.file.mimetype;.buffer;
    const { name, content, deletedAt } = req.body;
    // console.log({ name, content, image, deletedAt });
    // res.status(200).json({ ok: 200 });
    const newActivity = await create({ name, content, image, deletedAt });
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
      throw new Error('Activity not found');
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
      throw new Error('No activities found');
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
      throw new Error('Activity not found');
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
      throw new Error('Activity not found');
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
  deleteActivityById,
};
