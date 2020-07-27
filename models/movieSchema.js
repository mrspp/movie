const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema

let Movie = new Schema({
    poster: { type: String },
    title: { type: String },
    year: Number,
    imdb: { type: String, unique: true },
    tmdb: { type: Number }
});

Movie.plugin(mongoosePaginate)

module.exports = mongoose.model('Movie', Movie);