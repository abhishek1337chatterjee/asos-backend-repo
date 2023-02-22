

const mongoose = require('mongoose');

const manSchema = mongoose.Schema({
    productLink: String,
    ProductName: String,
    price: Number,
    sellingFastBadge: String,
    saleAmount: Number,
    productDealer: String,
},{
    versionKey: false,
})

const Manmodel = mongoose.model('mandata', manSchema);

module.exports = {
    Manmodel
}