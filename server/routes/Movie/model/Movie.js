const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({

    locationId: {
        type: Number
    },

    title: {
        type: String
    },

    description: {
        type: String
    },
    
    genre: {
        type: Array
    },

    rating: {
        type: String
    },

    director: {
        type: String
    },

    stars: {
        type: Array
    },

    runtime: {
        type: String
    },

    yearReleased: {
        type: Number
    },

    movieOwner: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }

}, { timestamps: true })

module.exports = mongoose.model("movie", MovieSchema)