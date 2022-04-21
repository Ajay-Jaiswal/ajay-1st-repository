const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema( {
    // Write the schema content
    name: String,
    category: String,
    price: Number
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema) //users

