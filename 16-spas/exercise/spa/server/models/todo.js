var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TodoSchema = new Schema({
  title: String,
  description: String,
  isCompleted: Boolean
})

var Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo
