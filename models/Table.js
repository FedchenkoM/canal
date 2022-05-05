const { Schema, model } = require('mongoose');

const schema = new Schema({
    date: { type: String },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    distance: { type: Number, required: true }
})

module.exports = model('TableElement', schema);