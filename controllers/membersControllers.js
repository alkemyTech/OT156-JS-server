const { create } = require("../services/membersServices");

const createMember = async (req, res, next) => {
  const { name } = req.body;
  const memberCreated = await create(name);
  res.send(memberCreated);
};

module.exports = {
  createMember,
};
