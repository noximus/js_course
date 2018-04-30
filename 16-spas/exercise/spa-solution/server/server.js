var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cors = require('cors')

var todoRouter = require('./routes/todo')

var Todo = require('./models/todo')

mongoose.connect('mongodb://localhost:27017/todo-spa-solution')

var app = express()

app.use(bodyParser.json())
app.use( bodyParser.urlencoded({ extended: true }) )
app.use(cors())

app.get('/', function( req, res ) {
  res.send('hello world')
})

app.use('/todo', todoRouter)

app.listen(3000, function() {
  console.log('listening on port 3000')
})
