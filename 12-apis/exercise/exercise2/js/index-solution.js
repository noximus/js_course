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
  var city = document.querySelector('input[name="city"]').value
  var country = document.querySelector('input[name="country"]').value

  // 1. Make the request to OpenWeatherMap API
  var request = new XMLHttpRequest()
  request.onreadystatechange = handleRequest

  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&APPID=17c4b9321d054573c1c93f24f47e706a')
  request.send(null)

  // 2. Update weather data
  function handleRequest() {
    if ( request.readyState === 4 ) {
      var response = JSON.parse( request.response )

      weather = {
        city: city,
        country: country,
        temperature: response.main.temp,
        description: response.weather[0].description,
        humidity: response.main.humidity,
        clouds: response.clouds.all
      }
    }
  }

  // 3. Render template
  renderWeather()

})
