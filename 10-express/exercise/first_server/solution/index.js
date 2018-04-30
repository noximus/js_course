var express = require('express')
var exphbs  = require('express-handlebars')
var data = {
  'projects': [
    {
      'id': 0,
      'title': 'War - the card game',
      'description': 'I implemented the game of war as a command line applications'
    },
    {
      'id': 1,
      'title': 'Foo the foo foo',
      'description': 'Foo fighters fighting foos'
    },
    {
      'id': 2,
      'title': 'Bar the bar bar',
      'description': 'Bar fighters fighting bars'
    }
  ]
}

var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function( request, response ) {
  response.render('home', { 'title': 'Test' })
})

app.get('/projects', function( request, response ) {
  response.render( 'projects', data )
})

app.get('/projects/:id', function( request, response ) {
  var index = parseInt( request.params.id, 10 )
  var project = data.projects[ index ]
  response.render( 'project', project )
})

app.get('*', function( request, response ) {
  response.send( '404!' )
})

app.listen( 3000, function() {
  console.log( 'Our first server listening on port 3000!' )
})
