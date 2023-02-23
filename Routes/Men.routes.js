const express = require('express');
const { MenModel } = require('../Models/Men.model');
const { MenBlackModel } = require('../Models/MenBlack.model');
const { MenGreenModel } = require('../Models/MenGreen.model');
const { MenRedModel } = require('../Models/MenRed.model');
const { WomenModel } = require('../Models/Women.model');
const { WomenBlackModel } = require('../Models/WomenBlack.model');
const { WomenBlueModel } = require('../Models/WomenBlue.model');
const { WomenPinkModel } = require('../Models/WomenPink.model');






const menRouter = express.Router();



menRouter.get("/", async (req, res) => {
    let {search,min,max} = req.query
    search=search || ""
    min=min || 1
    max=max || 100000
    console.log(search,min,max)
    try{
        let data = await MenModel.find({$and:[{product:{$regex:search, $options: 'i'}},{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
menRouter.get("/single/:id", async (req, res) => {
    const ID = req.params.id
    try{
        let data = await MenModel.find({_id:ID})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
menRouter.get("/black/single/:id", async (req, res) => {
    const ID = req.params.id
    try{
        let data = await MenBlackModel.find({_id:ID})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
menRouter.get("/green/single/:id", async (req, res) => {
    const ID = req.params.id
    try{
        let data = await MenGreenModel.find({_id:ID})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
menRouter.get("/red/single/:id", async (req, res) => {
    const ID = req.params.id
    try{
        let data = await MenRedModel.find({_id:ID})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
menRouter.get("/black", async (req, res) => {
    let {min,max} = req.query
    min=min || 1
    max=max || 10000
    try{
        let data = await MenBlackModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
menRouter.get("/green", async (req, res) => {
    let {min,max} = req.query
    min=min || 1
    max=max || 100000
    try{
        let data = await MenGreenModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
menRouter.get("/red", async (req, res) => {
    let {min,max} = req.query
    min=min || 1
    max=max || 100000
    try{
        let data = await MenRedModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        res.send(err.message)
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

menRouter.post("/try", async (req, res) => {
    let payload = req.body.data
    try{
        let data = MenBlackModel.insertMany(payload)
        res.send("Data Sent successfully!")
    }catch(err){
        console.log('err:', err)
    }
})


module.exports = {
    menRouter
}
