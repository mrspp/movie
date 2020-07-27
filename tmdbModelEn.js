const axios = require("axios");
const mongoose = require("mongoose");
const movieSchema = require("./models/movieSchema");
const tmdbModelEn = require("./models/tmdbModelEn");

var mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

movieSchema.find({}, (err, result) => {
  for (let index = 0; index < result.length; index++) {
    setTimeout(() => {
      let data = result[index];
      if (data.tmdb !== 0) {
        axios
          .get(
            "https://api.themoviedb.org/3/movie/" +
              data.tmdb +
              "?api_key=cea1955961655b8f2c33ce58c6e89eb3&language=en-US"
          )
          .then((res) => {
            let tmdbmodelens = new tmdbModelEn({
              id: res.data.id,
              adult: res.data.adult,
              backdrop_path: res.data.backdrop_path,
              belongs_to_collection: res.data.belongs_to_collection,
              budget: res.data.budget,
              genres: res.data.genres,
              homepage: res.data.homepage,
              imdb_id: res.data.imdb_id,
              original_language: res.data.original_language,
              original_title: res.data.original_title,
              popularity: res.data.popularity,
              poster_path: res.data.poster_path,
              production_companies: res.data.production_companies,
              production_countries: res.data.production_countries,
              release_date: res.data.release_date,
              revenue: res.data.revenue,
              runtime: res.data.runtime,
              spoken_languages: res.data.spoken_languages,
              status: res.data.status,
              tagline: res.data.tagline,
              title: res.data.title,
              video: res.data.video,
              vote_average: res.data.vote_average,
              vote_count: res.data.vote_count,
            });
            console.log(`Crawling ${index} of 18661`);
            tmdbmodelens.save();
            // console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      // console.log(res[index].tmdb);
    }, index * 500);
  }
});
