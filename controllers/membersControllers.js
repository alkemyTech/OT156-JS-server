const { create, deleteMember, updateMember } = require("../services/membersServices");

const createMember = async (req, res, next) => {
  const { name } = req.body;
  const memberCreated = await create(name);
  res.send(memberCreated);
};

const deleteMembers = async (req, res, next) => {
  const { id } = req.params;
  const memberDeleted = await deleteMember(id);
  memberDeleted === 500
    ? res.status(memberDeleted).send("Member Doesn't Exist")
    : res.status(memberDeleted).send("Member Deleted");
};

const updateMembers = async (req, res, next) => {
    const { id } = req.params;
    const {name, image} = req.body
    const memberUpdated = await updateMember(id, name, image);
    memberUpdated === 500
    ? res.status(memberUpdated).send("Member Doesn't Exist")
    : res.status(memberUpdated).send("Member Updated");
  };

module.exports = {
  createMember,
  deleteMembers,
  updateMembers
};
