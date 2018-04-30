var express = require('express')
var request = require('request')

var Artist = require('../models/artists')

var router = express.Router()

router.get('/', function( req, res ) {

  console.log('here')

  res.redirect('/')

})

router.post('/', function( req, res ) {

  var data = JSON.parse( req.body.data );

  // look up documentation for request here:
  // https://github.com/request/request
  request('https://api.spotify.com/v1/artists/' + data.id, function( err, response, body ) {

    var artistData = JSON.parse( body )

    var newArtist = new Artist({
      name: artistData.name,
      imageUrls: artistData.images,
      spotifyId: artistData.id,
      genres: artistData.genres
    })

    newArtist.save()

    res.status(200).send('success')

  })

})

router.get('/new', function( req, res ) {

  res.render('artists/new')

})

router.get('/:id', function( req, res ){

  Artist.findById(req.params.id, function( err, artist ) {

    res.render('artists/artist',  artist)

  })

})

router.post('/edit', function( req, res ) {

  Artist.findById(req.body.id, function( err, artist ) {

    artist.name = req.body.name
    artist.description = req.body.description
    artist.save()

    res.redirect('/artists/' + artist.id )

  })

})

router.get('/edit/:id', function( req, res ) {

  Artist.findById(req.params.id, function( err, artist ) {

    res.render('artists/edit', artist)

  })

})

module.exports = router
