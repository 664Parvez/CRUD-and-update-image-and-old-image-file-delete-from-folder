const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    firstName: {
        type : String,
    },
    lastName: {
        type : String,
    },
    email: {
        type : String,
    },
    image: {
        type : String,
    }
})

const Model = new mongoose.model('profile', schema)

module.exports = Model