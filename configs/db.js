const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', true);


const connections = mongoose.connect("mongodb+srv://abhishek:abhishek@cluster0.qm45l.mongodb.net/asos?retryWrites=true&w=majority")

module.exports = {
    connections
}