var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
const movieSchema = require('../models/movieSchema');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
//Get the default connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* GET home page. */
router.get('/', function (req, res, next) {
  let page = parseInt(req.query.page) || 1;
  console.log(page);
  // console.log(req.query.page);
  movieSchema.paginate({}, { page: page }, (err, result) => {
    //console.log(result);
    if (!err) res.render("movie", { data: result.docs })
  })
});

router.get('/:imdb', function (req, res, next) {
  movieSchema.paginate({ imdb: req.params.imdb }, {}, function (err, result) {
    console.log(result.docs);
    if (!err) res.render("movie_id", { data: result.docs })
  });
})

module.exports = router;
