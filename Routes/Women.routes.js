

const express = require('express');
const { WomenModel } = require('../Models/Women.model');
const { WomenBlackModel } = require('../Models/WomenBlack.model');
const { WomenBlueModel } = require('../Models/WomenBlue.model');
const { WomenPinkModel } = require('../Models/WomenPink.model');

const womenRouter = express.Router();



womenRouter.get("/", async (req, res) => {
    const {search,min,max} = req.query
    try{
        let data = await WomenModel.find({$and:[{product:{$regex:search, $options: 'i'}},{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        console.log('err:', err)
    }
})

womenRouter.get("/black", async (req, res) => {
    const {min,max} = req.query
    try{
        let data = await WomenBlackModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        console.log('err:', err)
    }
})

womenRouter.get("/blue", async (req, res) => {
    const {min,max} = req.query
    try{
        let data = await WomenBlueModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        console.log('err:', err)
    }
})

womenRouter.get("/pink", async (req, res) => {
    const {min,max} = req.query
    try{
        let data = await WomenPinkModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        console.log('err:', err)
    }
})


module.exports = {
    womenRouter
}




