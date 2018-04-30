var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
  author: String,
  title: String,
  description: String,
  url: String,
  comments: Array
})

var Article = mongoose.model( 'Article', ArticleSchema )

module.exports = Article
