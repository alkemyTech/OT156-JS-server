const express = require('express');
const { getAllServices } = require('../services/membersServices.js');
const { create, deleteMember } = require("../services/membersServices");

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

const getAllMembers = async ( req, res, next) => {
    try {
        const members = await getAllServices();
        res.json( { members } );
    } catch ( err ) {
        res.status( 500 );
        res.json( { err } );
    }
}

module.exports = {
  createMember,
  deleteMembers,
  getAllMembers,
};