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

app.get('/', function(req, res){
  res.render('search', data)
})

app.get('/home', function( req, res ) {
  res.render('home', data)
})

app.get('/pokemon/:id', function( req, res ) {
  var pokemon = getPokemon( req.params.id )
  res.render('pokemon', pokemon)
})
app.listen( 3000, function() {
  console.log( 'Your pokedex is working' )
})



// Controller

//1.Search for indiviudal pokemon:
//      Build the url for the API call
//      Make the request to the pokedex API
//      Return the pokemon and render it's view

searchPokemon = function(){
  $('#searchForm').on('submit', function(event) {
    event.preventDefault();
    });
}

// 2. Create your own pokemons
