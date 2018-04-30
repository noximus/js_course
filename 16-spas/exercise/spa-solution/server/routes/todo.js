var express = require('express')

var Todo = require('../models/todo')

var router = express.Router()

router.use(function( req, res, next ) {
  console.log( req.body )
  next()
})

router.get('/', function( req, res ) {
  Todo.find({}, function( err, todos ){

    res.status(200).json( todos )

  })
})

router.post('/', function( req, res ) {

  var todo = JSON.parse( req.body.data )

  var newTodo = new Todo({
    title: todo.title,
    description: todo.description,
    isCompleted: false
  })

  newTodo.save(function( err ) {
    if (err) {
      console.log( err )
    }

    Todo.find({}, function( err, todos ) {

      res.status(200).json(todos)

    })

  })

})

router.get('/:id', function( req, res ) {

  Todo.findById(req.params.id, function( err, todo ) {

    res.status(200).json( todo )

  })

})

router.post('/:id', function( req, res ) {

  Todo.find({id: req.params.id}, function( err, todo ) {

    todo.title = req.body.title || todo.title
    todo.description = req.body.description || todo.description
    todo.isCompleted = req.body.description || todo.isCompleted

    todo.save()

    res.json( todo )

  })

})


module.exports = router
