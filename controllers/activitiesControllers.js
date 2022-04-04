const { create, update } = require("../services/activitiesServices");

const addActivity = async (req, res, next) => {
  try {
    const newActivity = await createActivity(req.body);
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
module.exports = {
  addActivity,
  updateActivity,
};
