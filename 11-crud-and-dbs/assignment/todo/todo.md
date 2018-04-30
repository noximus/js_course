# To Do
Your assignment is to create a to do list application that uses `mongoose` to store individual to dos

This assignment is divided in to two levels with a bonus afterwards. __Level 1__ is similar to the to do applications we've built previously, but requires an integration with `mongoose`. __Level 2__ requires you to break out the application a little more and use a little more of `express` and `mongoose`.

You are only required to submit __Level 1__ before next class

## Level 1
The criteria for __Level 1__ are as follows:
  - build a basic `express` server with a single route and serving a single page
  - the todo list should have an index (`/`) route that lists all todos stored in your `mongoose` database
  - the homepage of your application should have a form that submits a `post` request to your index route to create a new to do item

## Level 2
The criteria for __Level 2__ are as follows:
  - rather than have both your form and your todo list in your `home` view, break out the form into a `new` view
    - create a `todo` directory in your `views` directory
    - create a `views/todo/new.handlebars` template for your form and create a link to it in your `home.handlebars` template. You'll also need to setup a route!
  - create a page to show the details of one particular todo. You'll need to
    (1) create a `views/todo/todo.handlebars` template
    (2) create a route that takes a single to do's id as a parameter, then
    (3) modify your to do list so that each to do item has a link to that specific to do using its id (i.e. `todos/1`).
    (4) In your route handler, you'll need to use `findById` instead of `find` to get a todo from your database by it's id
    (5) You'll need to modify your `app.post('/todos')` route to both create new todos and update existing todos or create a new route at `app.post('/todos/edit')` that will take an existing to do and edit it

# Bonus:
Read up on using [static files](http://expressjs.com/en/starter/static-files.html) in express and try to add a css file to style your todo application.

