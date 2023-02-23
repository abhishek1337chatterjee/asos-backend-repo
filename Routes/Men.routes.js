const express = require('express');
const { MenModel } = require('../Models/Men.model');
const { MenBlackModel } = require('../Models/MenBlack.model');
const { MenGreenModel } = require('../Models/MenGreen.model');
const { MenRedModel } = require('../Models/Menred.model');






const menRouter = express.Router();



menRouter.get("/", async (req, res) => {
    const {search,min,max} = req.query
    try{
        let data = await MenModel.find({$and:[{product:{$regex:search, $options: 'i'}},{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        console.log('err:', err)
    }
})
menRouter.get("/black", async (req, res) => {
    const {min,max} = req.query
    try{
        let data = await MenBlackModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        console.log('err:', err)
    }
})
menRouter.get("/green", async (req, res) => {
    const {min,max} = req.query
    try{
        let data = await MenGreenModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        console.log('err:', err)
    }
})
menRouter.get("/red", async (req, res) => {
    const {min,max} = req.query
    try{
        let data = await MenRedModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        console.log('err:', err)
    }
})
// ------------------------------------------------------------------

menRouter.post("/", async (req, res) => {
    let payload = req.body
    try{
        let data = new MenModel(payload)
        await data.save();
        res.send("Data Sent successfully!")
    }catch(err){
        console.log('err:', err)
    }
})
menRouter.patch("/:id", async (req, res) => {
    let ID = req.params.id
    let payload = req.body
    try{
        let data = await MenModel.findByIdAndUpdate({_id:ID},payload)
        res.send("Data Updated successfully!")
    }catch(err){
        console.log('err:', err)
    }
})
menRouter.delete("/:id", async (req, res) => {
    let ID = req.params.id
    try{
        let data = await MenModel.findByIdAndDelete({_id:ID})
        res.send("Data Deleted successfully!")
    }catch(err){
        console.log('err:', err)
    }
})



module.exports = {
    menRouter
}
