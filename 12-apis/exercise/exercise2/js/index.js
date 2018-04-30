// Weather data
var weather = {
  city: '',
  country: '',
  temperature: '',
  description: '',
  humidity: '',
  clouds: ''
}

// Compile the template outside of the function, so that we only do it
// once, instead of on every render.
var app = document.querySelector('#weather')
var templateSource = document.querySelector('#weather-template').innerText
var template = Handlebars.compile(templateSource)

function renderWeather() {
  var weatherHtml = template(weather)
  app.innerHTML = weatherHtml
}

// First render
renderWeather()

// Setup Listeners
var searchForm = document.querySelector('#searchForm')
searchForm.addEventListener('submit', function( e ) {
  e.preventDefault()

  // Get the values enetered by the user

  // 1. Make the request to OpenWeatherMap API

  // 2. Update weather data

  // 3. Render template

})
