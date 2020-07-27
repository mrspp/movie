const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2')

let TmdbModelEn = new Schema({
  id: { type: Number, unique: true },
  adult: Boolean,
  backdrop_path: String,
  belongs_to_collection: Object,
  budget: Number,
  genres: [Object],
  homepage: String,
  imdb_id: String,
  original_language: String,
  original_title: String,
  popularity: Number,
  poster_path: String,
  production_companies: [Object],
  production_countries: [Object],
  release_date: Date,
  revenue: Number,
  runtime: Number,
  spoken_languages: [Object],
  status: String,
  tagline: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number
});

TmdbModelEn.plugin(mongoosePaginate);

module.exports = mongoose.model('TmdbModelEn', TmdbModelEn);