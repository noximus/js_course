var express = require('express')

var Song = require('../models/songs')

var router = express.Router()

router.get('/', function( req, res ) {

  Song.find({}, function( err, songs) {

    res.render('songs', {songs: songs})

  })

})

router.post('/', function( req, res ) {

    var data = JSON.parse( req.body.data );

    var newSong = new Song({
      title: data.name,
      artist: data.artists[0].name,
      album: data.album.name
    })

    newSong.save()

    res.status(200).send('success')

})

router.get('/new', function( req, res ) {

  res.render('songs/new')

})

router.get('/:id', function( req, res ) {

  Song.findById(req.params.id, function( err, song ) {

    res.render('songs/song', song)

  })

})

router.post('/edit', function( req, res ) {

  Song.findById(req.body.id, function( err, song ) {

    song.name = req.body.name
    song.description = req.body.description
    song.save()

    res.redirect('/songs/' + song.id )

  })

})

router.get('/edit/:id', function( req, res ) {

  Song.findById( req.params.id, function( err, song ) {

    res.render('songs/edit', song)

  })

})

module.exports = router
