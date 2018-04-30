var express = require('express')
var exphbs  = require('express-handlebars')
var data    = require('./pokedex.json')

function getPokemon( id ) {
  var pokemon
  for (var i = 0; i < data.pokemon.length; i++) {
    if ( data.pokemon[ i ].id === id ) {
      pokemon = data.pokemon[ i ]
      break
    }
  }
  return pokemon
}

var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function( req, res ) {
  res.render('home', data)
})

app.get('/pokemon/:id', function( req, res ) {
  var pokemon = getPokemon( req.params.id )
  res.render('pokemon', pokemon)
})

app.listen( 3000, function() {
  console.log( 'Your pokedex is working' )
})
