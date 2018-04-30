var express = require('express')
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

app.get('/', function(req, res){
  res.json({'message': 'welcome to the Pokedex'})
})

app.get('/pokemon', function( req, res ) {
  res.json( data )
})

app.get('/pokemon/:id', function( req, res ) {
  var pokemon = getPokemon( req.params.id )
  res.json( pokemon )
})

app.listen( 3000, function() {
  console.log( 'Your pokedex is working' )
})
