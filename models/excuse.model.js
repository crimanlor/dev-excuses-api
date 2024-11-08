const { Schema, model } = require('mongoose');

const excuseSchema = new Schema({
    value: {
        type: String,
        minlength: 10,
        maxlength: 150,
        required:[ true, 'Excuse value is required' ]
    },
    category: {
        type: String,
        enum: ["network", "database", "api", "delay", "deployment", "bug", "syntax", "git"],
        required:[ true, 'Excuse category is required' ]
    },
    bsLevel: { // nivel de "credibilidad" de la excusa
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: Number.isInteger,
            message: 'bsLevel must be an integer value'
        },
        required: [ true, 'Excuse bsLevel is required' ]
    }
})

const Excuse = model('Excuse', excuseSchema)

module.exports = Excuse