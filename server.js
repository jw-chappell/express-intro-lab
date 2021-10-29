//  IMPORT MODULES 

import express  from 'express'
// import the todos database 
import * as sneakers from './data/sneakers-db.js'
// we could also do:
// import { find } from "./data/sneakers.js"
// BUT NOT BOTH! (well, you can, but please don't)


// Create Express application 

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')



// Mount Middleware (app.use)


/**  Mount routes 
Going to attract rount onto our app that **/

// local.host:3000/
app.get("/", function(req,res) {
  console.log(req)
  console.log(res)
  res.send("<h1>hello, friend!</h1>")
})

// local.host:3000/sneakers
app.get('/sneakers', function(req, res) {
  sneakers.find({}, function(error, sneakers) {
    res.render('sneakers/index', {
      sneakers: sneakers,
      error: error
    })
  })
})

// Tell our app to listen on port 3000

app.listen(3000, function() {
  console.log("Listening on 3k!");
})

