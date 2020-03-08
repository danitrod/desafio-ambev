const { Schema, model } = require('mongoose');
const PointSchema = require('./utils/PointSchema');
const BrewSchema = require('./utils/BrewSchema');

const CddSchema = new Schema({
    name: String,
    brews: [BrewSchema],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = model('Cdd', CddSchema);
