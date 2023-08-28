const mongoose = require('mongoose')

const captainSchema = new mongoose.Schema({
    Title: {
        title: String,
        required: true
    },
    Entry: {
        entry: String,
        required: true

    },
    shipIsBroken: Boolean
})
const Captain = mongoose.model('Captain', captainSchema)

module.exports = Captain;