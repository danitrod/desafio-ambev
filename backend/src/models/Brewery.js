const { Schema, model } = require('mongoose');
const PointSchema = require('./utils/PointSchema');
const BrewSchema = require('./utils/BrewSchema');

const BrewerySchema = new Schema({
    name: String,
    brewing: [
        {
            dueDate: Date,
            brew: BrewSchema,
            to: String
        }
    ],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = model('Brewery', BrewerySchema);
