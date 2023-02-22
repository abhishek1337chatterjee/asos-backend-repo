const mongoose = require('mongoose');

const manSchema = mongoose.Schema({
    productLink: String,
    ProductName: String,
    price: String,
    sellingFastBadge: String,
    saleAmount: String,
    productDealer: String,
},{
    versionKey: false,
})

const TopMenmodel = mongoose.model('manTopdata', manSchema);

module.exports = {
    TopMenmodel
}