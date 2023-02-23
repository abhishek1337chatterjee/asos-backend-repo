

const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

const dotenv = require('dotenv');

dotenv.config();

const connections = mongoose.connect(process.env.mongoURL)

module.exports = {
    connections
}