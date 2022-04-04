const { createActivity } = require("../services/activitiesServices");

const addActivity = async (req, res, next) => {
  try {
    const newActivity = await createActivity(req.body);
    res.send(newActivity);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  addActivity,
};
