const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique : true
    },
    budget: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        minlength : 6,
        required : true 
    }
},{collection: 'files'})

module.exports = mongoose.model('files', budgetSchema);