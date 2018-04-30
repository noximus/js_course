var express = require('express')

var Artist = require('../models/artists')

var router = express.Router()

router.get('/', function( req, res ) {

  Artist.find({}, function( err, artists ) {

    res.render('index', { artists: artists })

  })

})

router.get('/about', function( req, res ) {

  res.render('about')

})

module.exports = router
