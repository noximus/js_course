var mongoose = require('mongoose')
var Schema = mongoose.Schema

var songSchema = new Schema({
  title: String,
  artist: String,
  album: String,
  description: String
})

var Song = mongoose.model( 'Song', songSchema )

module.exports = Song
