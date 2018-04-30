document.onreadystatechange = App

var Tunr = {
  "common": function() {
    console.log("common")
  },
  "/artists/new": function() {
    console.log('artists/new')

    var artistForm = document.querySelector('.js-form')
    artistForm.addEventListener('submit', function( e ) {
      e.preventDefault()
      var artist = e.target.querySelector('input').value

      var requestUrl = 'https://api.spotify.com/v1/search?q=' + urlify(artist) + '&type=artist&limit=4'

      var spotifyRequest = generateRequest( 'GET', requestUrl, handleSpotifyResponse )

      spotifyRequest.send()

      function handleSpotifyResponse( response ) {

        var responseJSON = JSON.parse( response )
        var artists = responseJSON.artists.items
        var artistsContainer = document.querySelector('.js-artists-container')

        artists.forEach(function( artist ) {
          var button = document.createElement('button')
          button.id = artist.id
          button.classList.add('c-artist-button')
          button.innerText = artist.name

          artistsContainer.appendChild( button )

        })

        artistsContainer.addEventListener('click', function( e ) {
          e.preventDefault();
          var target = e.target

          console.dir(target)

          if ( target.tagName === "BUTTON" ) {

            var createArtistRequest = generateRequest('POST', '/artists', handleServerResponse)

            createArtistRequest.send( encodeURI( "data=" + JSON.stringify( { id: target.id } ) ) )
          }

          function handleServerResponse( secondResponse ) {

            if ( secondResponse === 'success' ) {
              window.location.assign('/artists')
            }

          }

        })

      }

    })
  },
  "/songs/new": function() {
    console.log("/songs/new")

    var songForm = document.querySelector('.js-form')
    songForm.addEventListener('submit', function( e ) {
      e.preventDefault()

      var song = e.target.querySelector('input').value

      var requestUrl = 'https://api.spotify.com/v1/search?q=' + urlify(song) + '&type=track&limit=1'

      var spotifyRequest = generateRequest( 'GET', requestUrl, handleSpotifyResponse )

      spotifyRequest.send()

      function handleSpotifyResponse( response ) {

        var responseJSON = JSON.parse( response )

        console.log( responseJSON )

        var songRequest = generateRequest( 'POST', '/songs', handleServerResponse )
        songRequest.send( encodeURI( "data=" + JSON.stringify( responseJSON.tracks.items[0] ) ) )

      }

      function handleServerResponse( secondResponse ) {

        if ( secondResponse === 'success' ) {
          window.location.assign('/songs')
        }

      }

    })
  }
}

function App() {

  if ( document.readyState !== 'complete' ) return

  var routes = []

  // var routes = window.location.pathname.substring(1).split('/')
  // routes.unshift('common')

  routes.push('common')
  routes.push(window.location.pathname)

  var func
  for (var i = 0; i < routes.length; i++) {
    func = Tunr[ routes[i] ]
    if ( typeof func == 'function' ) func()
  }

}

function generateRequest( method, requestUrl, handler ) {

  var request = new XMLHttpRequest()


  request.open( method, requestUrl, true)
  if ( method === 'POST' ) {
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  }

  request.onreadystatechange = function () {

    if (request.readyState != 4 || request.status != 200) return
    if ( typeof handler == 'function' ) handler( request.response )

  }

  return request
}

function urlify( artist ) {
  return encodeURI( artist )
}
