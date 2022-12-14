const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    insertionDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Products', ProductSchema);