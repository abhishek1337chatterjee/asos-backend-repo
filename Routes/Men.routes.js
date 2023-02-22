const express = require('express');
const { men } = require('../db');
const { ManJeansmodel } = require('../Models/MenJeans.model');
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

// menRouter.post("/jeanstrouser", async (req, res) => {
//     try {
//         for(let i = 0; i < men.length; i++) {
//             const jeans = new ManJeansmodel(men[i]);
//             await jeans.save();
//         }
//         res.send({msg: "Success"});
//     } catch (error) {
//         res.send({msg: "Error inserting",error: error.message});
//     }
// })

menRouter.get("/jeanstrouser", async (req, res) => {
    try {
        
            const jeans = await ManJeansmodel.find();
        res.send(jeans);
    } catch (error) {
        res.send({msg: "Error inserting",error: error.message});
    }
})




module.exports = {
    menRouter
}
