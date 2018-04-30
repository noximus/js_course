var express = require("express")

// Create a router for handling our application as
// well as our sign-up flow
var router = express.Router()

// Index route
router.get("/", function( req, res ) {

  res.render('index')

})

module.exports = router
