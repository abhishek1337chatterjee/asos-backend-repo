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
        let data = await MenModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        console.log('err:', err)
    }
})
menRouter.get("/green", async (req, res) => {
    const {min,max} = req.query
    try{
        let data = await MenModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        console.log('err:', err)
    }
})
menRouter.get("/red", async (req, res) => {
    const {min,max} = req.query
    try{
        let data = await MenModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        console.log('err:', err)
    }
})



module.exports = {
    menRouter
}
