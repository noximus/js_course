var app = document.getElementById('app')

var Views = {
  toDoList: {
    setup: function () {
      // setup todo list
      var newLink = document.querySelector('.js-new')
      newLink.addEventListener('click', function( e ) {
        e.preventDefault()

        app.innerHTML = Views.newTodo.render()
        Views.newTodo.setup()
      })

      var todoList = document.querySelector('.js-list')
      todoList.addEventListener('click', function( e ) {
        e.preventDefault()

        var target = e.target

        if ( target.tagName === "LI" ) {
          var request = new XMLHttpRequest()
          request.open('GET', 'http://localhost:3000/todo/' + target.dataset.id, true)
          request.send()
          request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200) {

              var todo = JSON.parse( request.response )

              app.innerHTML = Views.singleTodo.render(todo)
              Views.singleTodo.setup()

            }
          }
        }
      })
    }
  },
  newTodo: {
    setup: function () {

      var submitButton = document.querySelector('.js-submit')
      submitButton.addEventListener('click', function( e ) {
        e.preventDefault()

        var newForm = document.querySelector('.js-new-todo')

        var newTodo = {
          title: newForm.querySelector('input').value,
          description: newForm.querySelector('textarea').value
        }

        Todo.create(newTodo, function( todos ) {

          var todos = JSON.parse(todos)

          // reset todo list
          Todo.todos = todos

          // render to do list view
          app.innerHTML = Views.toDoList.render(Todo)
          Views.toDoList.setup()

        })

      })

    }
  },
  singleTodo: {
    setup: function () {

      var backButton = document.querySelector('.js-back')
      backButton.addEventListener('click', function( e ) {
        e.preventDefault()

        app.innerHTML = Views.toDoList.render( Todo )
        Views.toDoList.setup()
      })
    }
  }
}

var Todo = {
  todos: [],
  create: function( newTodo, cb ) {

    var request = new XMLHttpRequest()
    request.open('POST', 'http://localhost:3000/todo', true)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

    request.send( encodeURI("data=" + JSON.stringify(newTodo) ) )

    request.onreadystatechange = function() {

      if ( request.readyState === 4 && request.status === 200 ) {
        cb( request.response )
      }

    }

  }
}

function setup() {
  var templateSources = document.querySelectorAll("[id^='template-']")

  for (var i = 0; i < templateSources.length; i++) {
    Views[ templateSources[i].id.substring(9) ].render =  Handlebars.compile( templateSources[i].innerHTML )
  }

  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:3000/todo')
  request.send()
  request.onreadystatechange = function() {

    if ( request.readyState === 4 && request.status === 200 ) {

      Todo.todos = JSON.parse( request.response )

      app.innerHTML = Views.toDoList.render( Todo )
      Views.toDoList.setup()

    }

  }

}

setup()
