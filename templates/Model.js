const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const %NAME = new Schema({
    title: String,
})

module.exports = mongoose.model('%NAME', %NAME);  
