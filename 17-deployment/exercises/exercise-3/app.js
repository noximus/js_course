// Require all dependencies
var express = require('express')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')


// Setup connection to MongoDB using Mongoose
mongoose.connect('mongodb://clovett:tunrdb@ds117821.mlab.com:17821/tunr-db')


var Artist = require('./models/artists')
var Song = require('./models/songs')

var routes = require('./routes/index')
var artists = require('./routes/artists')
var songs = require('./routes/songs')


// Create the Express app() and do some setup
var app = express()
app.use( express.static('public') )
app.use( bodyParser.urlencoded({ extended: true }) )

app.engine( 'handlebars', hbs({ defaultLayout: 'default' }) )
app.set( 'view engine', 'handlebars' )

/*

  Routes

*/
app.use('/', routes)
app.use('/artists', artists)
app.use('/songs', songs)


// Listen on port 8081
app.listen( 8081, function() { console.log( 'server is running ' ) } )
