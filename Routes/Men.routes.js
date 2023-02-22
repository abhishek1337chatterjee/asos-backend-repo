const express = require('express');
const { men } = require('../db');
const { Manmodel } = require('../Models/Mens.model');




const menRouter = express.Router();




menRouter.get("/", async (req, res) => {
    try {
        const menData = await Manmodel.find();
        res.send(menData);
    } catch (error) {
        res.send({msg: "Error inserting",error: error.message});
    }
})


module.exports = {
    menRouter
}
