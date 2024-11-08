const { Schema, model } = require('mongoose');

const excuseSchema = new Schema({
    value: {
        type: String,
        require: true
    }
})

const Excuse = model('Excuse', excuseSchema)

module.exports = Excuse