const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    balance: Number,
    Address: String,
    age: Number,
    gender:
    {
        type: String,
        enum: ["male", "female", "other"]
    },
    isFreeAppUser: Boolean

    // Write the schema content
}, { timestamps: true });

module.exports = mongoose.model('User1', userSchema) //users
