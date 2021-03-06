const express = require('express');
const { getAllServices ,create , deleteMember  } = require('../services/membersServices.js');
const { validationResult } = require("express-validator");

const createMember = async (req, res, next) => {
  const { name } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(500).send("Must be a string");
  } else {
    const memberCreated = await create(name);
    res.send(memberCreated);
  }
};

const deleteMembers = async (req, res, next) => {
  const { id } = req.params;
  const memberDeleted = await deleteMember(id);
  memberDeleted === 500
    ? res.status(memberDeleted).send("Member Doesn't Exist")
    : res.status(memberDeleted).send('Member Deleted');
};

const getAllMembers = async (req, res, next) => {
  try {
    const members = await getAllServices();
    res.json({ members });
  } catch (err) {
    res.status(500);
    res.json({ err });
  }
}

const updateMembers = async (req, res, next) => {
  const { id } = req.params;
  const { name, image } = req.body;
  const memberUpdated = await updateMember(id, name, image);
  memberUpdated === 500
    ? res.status(memberUpdated).send("Member Doesn't Exist")
    : res.status(memberUpdated).send("Member Updated");
};

module.exports = {
  createMember,
  deleteMembers,
  getAllMembers,
  updateMembers,
};
