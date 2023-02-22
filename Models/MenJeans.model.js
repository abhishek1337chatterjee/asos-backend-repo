
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

const ManJeansmodel = mongoose.model('manJeansdata', manSchema);

module.exports = {
    ManJeansmodel
}