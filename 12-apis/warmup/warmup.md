# Warm up

Here we have a (mostly) working Quote Book - not all that different form the Guest Book we built last class. Currently, our quotes are saved in a JavaScript object. We want to save them to a database though!

1. Set up and install Mongo and Mongoose so we can save our quotes to a database
2. Build a schema representing Quotes
3. Use that schema in our index.js file and modify our routes to find and create quotes in our Mongo database instead of our JS object
  - update `app.get('/')` to read all quotes
  - update `app.post('/new')` to create a new record
  - update `app.get('/:id')` to get a record by it's ID
  - update `app.get('/edit/:id')` to get a record by it's ID
  - update `app.post('/edit/:id')` to get a record by it's Id, update it, then save it
