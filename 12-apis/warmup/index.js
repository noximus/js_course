var express = require('express')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

var data = {
  quotes: [
    {
      id: 1,
      author : 'Audrey Hepburn',
      text : "Nothing is impossible, the word itself says 'I'm possible'!"
    },
    {
      id: 2,
      author : 'Walt Disney',
      text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"
    },
    {
      id: 3,
      author : 'Unknown',
      text : "Even the greatest was once a beginner. Don't be afraid to take that first step."
    },
    {
      id: 4,
      author : 'Neale Donald Walsch',
      text : "You are afraid to die, and you're afraid to live. What a way to exist."
    }
  ]
}

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function( req, res ) {

  res.render('home', data)

})

app
  .get('/new', function( req, res ) {

    res.render('new')

  })
  .post('/new', function( req, res ) {

    data.quotes.push({
      id: data.quotes[ data.quotes.length - 1 ].id + 1,
      author: req.body.author,
      text: req.body.text
    })

    res.redirect('/')

  })

app.get('/:id', function( req, res ) {
  var quoteId = parseInt( req.params.id, 10 )

  data.quotes.forEach(function( item ) {
    if ( item.id === quoteId ) {
      res.render('quote', item)
    }
  })

})

app
  .get('/edit/:id', function( req, res ) {
    var quoteId = parseInt( req.params.id, 10 )

    data.quotes.forEach(function( item ) {
      if ( item.id === quoteId ) {
        res.render('new', item)
      }
    })

  })
  .post('/edit/:id', function( req, res ) {
    var quoteId = parseInt( req.params.id, 10 )

    data.quotes.forEach(function( item ) {
      if ( item.id === quoteId ) {
        item.text = req.body.text
        item.author = req.body.author || 'Unknown'
      }
    })

    res.redirect( '/' + quoteId )

  })


app.listen(3000)
