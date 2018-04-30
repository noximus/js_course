// Require all our 3rd party libraries
var express = require('express')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

// Setup our database connection
mongoose.connect('mongodb://localhost:27017/pokemon-solution')

// Build out a model for a Pokemon
var Schema = mongoose.Schema

var pokemonSchema = new Schema({
  name: String,
  abilities: Array,
  moves: Array
})

var Pokemon = mongoose.model('Pokemon', pokemonSchema)

// Set up express and build out a basic server
var app = express()

app.engine('handlebars', hbs({defaultLayout: 'default'}))
app.set('view engine', 'handlebars')

app.use( express.static('public') )
app.use( bodyParser.urlencoded({ extended: true }) )

app.get('/', function( req, res ) {

  Pokemon.find({}, function( err, pokemon ){
    res.render('index', { pokemon: pokemon }) 
  })

})

app.listen(3000)
