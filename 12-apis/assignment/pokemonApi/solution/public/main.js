// How to do AJAX requests with JS
// https://www.sitepoint.com/guide-vanilla-ajax-without-jquery/

console.log('this works')

var ajaxRequest = new XMLHttpRequest()
ajaxRequest.open('GET', 'http://pokeapi.co/api/v2/pokemon/' )

ajaxRequest.onreadystatechange = function( ){
  
  var done = 4
  var ok = 200

  if ( ajaxRequest.readyState === done && ajaxRequest.status === ok ) {
    var responseData = JSON.parse( ajaxRequest.responseText )

    console.log( responseData )
    
  }

}

ajaxRequest.send(null)
