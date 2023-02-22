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

const KnightwearManmodel = mongoose.model('manknightwearData', manSchema);

module.exports = {
    KnightwearManmodel
}