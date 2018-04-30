var express = require("express")
var passport = require('passport')

var User = require('../models/user')

// Create a router for handling our application as
// well as our sign-up flow
var router = express.Router()

// Index route
router.get("/", function( req, res ) {

  res.render('index', { user: req.user })

})

// Signing up as a new user
router.get('/signup', function( req, res ) {

  res.render('signup', {})

}).post('/signup', function( req, res ) {

  User.register(new User({
    username: req.body.username
  }), req.body.password, function( err, account ) {
    if ( err ) {
      return res.render('register', { account: account })
    }

    passport.authenticate('local')(req, res, function() {
      res.redirect('/')
    })

  })

})

// Loging in as an existing user
router.get('/login', function( req, res ) {

  res.render('login', { user: req.user })

}).post('/login',
  passport.authenticate('local'),
  function( req, res ) {
    res.redirect('/')
  }
)

// Logging out
router.get('logout', function ( req, res ) {
  req.logout()
  res.redirect('/')
})

module.exports = router
