/*

Exercise 3
The event object

*/

var counterIndex = 0
var myCounter = document.querySelector('h1')
myCounter.textContent += " " + counterIndex

/*

Get an array of all the buttons on the screen. Write an event handler that just `console.log`s "you clicked a button" when called. Loop over your array of buttons and attach our event handler to each button

*/
var myButtons = document.getElementsByClassName('js-button')

// function clickHandler() {
//   console.log( 'you clicked a button' )
// }

for (var i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener("click", clickHandler, false)
}

/*

Refactor your event handler so that it `console.log`s the event object. Poke around the event object

*/

// function clickHandler( event ) {
//   console.log( event )
// }


/*

Refactor your event handler so that it `console.log`s the target subobject

*/

// function clickHandler( event ) {
//   console.log( event.target )
// }


/*

Student activity:
Do one more refactor of the event handler. Your event handler should:

1. get the increment/decrement value from the event target
2. turn that value into a number
3. add the increment/decrement value to the current value of counterIndex and update the page

Hint: anything data that we define in our html with data-* will be in our elements dataset property

*/

function clickHandler( event ) {

  var currentButton = event.target
  counterIndex += parseInt(currentButton.dataset.incrementer, 10)

  myCounter.textContent = "Counter: " + counterIndex

}
