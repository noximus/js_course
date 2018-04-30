/*

Exercise 5: A Todo List Application

For this exercise students will build out a functioning to-do list application.
When a user submits the form, their todo item should be added to the end of the to do list.

To accomplish this, you'll need to create an event handler that you can attach to an event listener on the form.

In your event handler, you can get the form from the event object. Then you can query the form for the input element and get it's current value.

You'll then need to create an <li> element that contains the text from the input value and add it to the end of the todo-list

*/

var List = document.getElementById('todo-list')
var Form = document.getElementById('form')

// we have to change the button type to submit in order for this to work!
Form.addEventListener('submit', formSubmitHandler)

function formSubmitHandler( e ) {

  e.preventDefault()

  var formInput = e.target.querySelector('[name=newToDo]')
  var newToDo = new ToDo( formInput.value )

  List.appendChild( newToDo )
  formInput.value = ''

}

function ToDo( todoValue ) {

  var todo = document.createElement('li')
  todo.textContent = todoValue

  return todo

}
