const express = require('express');
const { KnightwearManmodel } = require('../Models/KnightwearMen.model');
const { ManJeansmodel } = require('../Models/MenJeans.model');
const { Manmodel } = require('../Models/Mens.model');
const { TopMenmodel } = require('../Models/TopsMen.model');




const menRouter = express.Router();



menRouter.get("/", async (req, res) => {
    const {search,min,max} = req.query
    try{
        let data = await Manmodel.find({$and:[{ProductName:{$regex:search, $options: 'i'}},{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        console.log('err:', err)
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


menRouter.post("/try", async(req, res) => {
    try {
        // const knight = await Manmodel.insertMany(req.body.data);
        res.send({msg: "Successfully inserted"});
    } catch (error) {
        res.send({msg: "not getting the data",error: error.message})
    }
})

menRouter.get("/knightwearmen", async(req, res) => {
    try {
        const knight = await KnightwearManmodel.find();
        res.send({knight})
    } catch (error) {
        res.send({msg: "not getting the data",error: error.message})
    }
})


module.exports = {
    menRouter
}
