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

const TopMenmodel = mongoose.model('manTopdata', manSchema);

module.exports = {
    TopMenmodel
}