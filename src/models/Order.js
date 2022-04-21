const mongoose = require('mongoose');
const moment = require("moment")
const ObjectId = mongoose.Schema.Types.ObjectId


const orderSchema = new mongoose.Schema( {
    // Write the schema content
    userId: {
        type: ObjectId,
        ref:"User1"
    },
    productId: {
        type: ObjectId,
        ref:"Product"
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: String

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) //users
