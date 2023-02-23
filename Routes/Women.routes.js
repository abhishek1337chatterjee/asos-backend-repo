

const express = require('express');
const { WomenModel } = require('../Models/Women.model');

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


module.exports = {
    womenRouter
}




