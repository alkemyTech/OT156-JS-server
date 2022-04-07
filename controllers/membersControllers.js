const express = require('express');
const { getAllServices } = require('../services/membersServices.js');

const getAllMembers = async ( req, res, next) => {
    try {
        const members = await getAllServices();
        res.json( { members } );
    } catch ( err ) {
        res.status( 500 );
        res.json( { err } );
    }
}
module.exports ={
    getAllMembers
}