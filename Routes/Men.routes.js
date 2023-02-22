const express = require('express');
const { KnightwearManmodel } = require('../Models/KnightwearMen.model');
const { ManJeansmodel } = require('../Models/MenJeans.model');
const { Manmodel } = require('../Models/Mens.model');
const { TopMenmodel } = require('../Models/TopsMen.model');




const menRouter = express.Router();




menRouter.get("/", async (req, res) => {
    try {
        const menData = await Manmodel.find();
        res.send(menData);
    } catch (error) {
        res.send({msg: "Error inserting",error: error.message});
    }
})






menRouter.get("/jeanstrouser", async (req, res) => {
    try {
        
        const jeans = await ManJeansmodel.find();
        res.send(jeans);
    } catch (error) {
        res.send({msg: "not getting the data",error: error.message});
    }
})

menRouter.get("/topmen", async (req, res) => {
    try {
        const top = await TopMenmodel.find();
        res.send(top);
    } catch (error) {
        res.send({msg: "not getting the data",error: error.message})
    }
})


// menRouter.post("/knightwearmen", async(req, res) => {
//     try {
//         const knight = await KnightwearManmodel.insertMany(req.body.data);
//         res.send({msg: "Successfully inserted"});
//     } catch (error) {
//         res.send({msg: "not getting the data",error: error.message})
//     }
// })

// menRouter.post("/knightwearmen", async(req, res) => {
//     try {
//         const knight = await KnightwearManmodel.insertMany(req.body.data);
//         res.send({msg: "Successfully inserted"});
//     } catch (error) {
//         res.send({msg: "not getting the data",error: error.message})
//     }
// })


module.exports = {
    menRouter
}
