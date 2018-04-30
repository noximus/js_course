document.onreadystatechange = app

var students = [
  'Jake Priddy',
  'Philip Harding',
  'Sean Hoar',
  'Esther Oh',
  'Nicholas Mitchell',
  'Chaz Spears',
  'Andrew Aronoff',
  'Jack Farrow',
  'Ronald Sun',
  'Gabe Salkin',
  'Victor Salcedo',
  'Joe Nelson',
  'Nyasha Hamilton',
]

function app() {

  if ( document.readyState !== 'complete' ) { return }

  var title = document.querySelector('.js-student')

  document.addEventListener('keydown', function( e ) {

    if ( e.keyCode === 13 || e.which === 13 ) {
      e.preventDefault()

      if ( students.length > 0 ) {
        var randomIndex = Math.floor( Math.random() * students.length )
        var randomStudent = students.splice( randomIndex, 1 )
        title.textContent = randomStudent
      } else {
        title.innerHTML = 'All finished! <br /> Have a nice life!'
      }

    }

  })

}
