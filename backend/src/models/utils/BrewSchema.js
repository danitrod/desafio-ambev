const { Schema } = require('mongoose');

const BrewSchema = new Schema({
    name: String,
    quantity: Number,
    imageURL: String
});

module.exports = BrewSchema;
