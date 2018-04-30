// All our requires/dependencies
var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')

// Connect to our Mongo database, using Mongoose and include our models
mongoose.connect('mongodb://localhost:27017/hackerwall-solution')

var Post = require('./models/posts')

// Creating our Application
var app = express()

// Registering and use our template engine (handlebars)
app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Serving static files (like css)
app.use(express.static('public'))

// Use Body Parser
app.use(bodyParser.urlencoded({extended: true}))

// Routes
// application routes (i.e. controller)
app.get('/', function( req , res ) {
  // index route
  // list every article

  Post.find({}, function( err, posts ) {

    res.render('index', { posts: posts })

  })

})

app.get('/posts/new', function( req, res ) {
    // new view
    // render template for creating a new article

    res.render('new')

  }).post('/posts/new', function( req, res ) {
    // create a new article in the DB
    // render show view for new article

    var newPost = new Post({
      url: req.body.url,
      author: req.body.author,
      title: req.body.title,
      description: req.body.description
    })

    newPost.save()

    res.redirect('/')

  })

app.get('/posts/:id', function( req, res ) {

  Post.findById( req.params.id, function( err, post ){

    res.render( 'show', { post: post } )

  })

}).post('/posts/:id', function( req, res ) {

  Post.findById( req.params.id, function( err, post ){

    post.comments.push( req.body )
    post.save()

    res.render( 'show', { post: post } )

  })

})


app.listen( 3000, function() {

  console.log( 'listening on 3000' )

})
