var mongoose = require('mongoose')
var Schema = mongoose.Schema

var artistSchema = new Schema({
  name: String,
  imageUrls: Array,
  spotifyId: String,
  genres: Array,
  description: String
})

var Artist = mongoose.model( 'Artist', artistSchema )

module.exports = Artist
