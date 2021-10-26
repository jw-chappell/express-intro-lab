//  IMPORT MODULES 

import express  from 'express'
// import the todos database 
import * as todoDb from './data/todo-db.js'
// we could also do:
import { find } from "./data/todo-db.js"
// BUT NOT BOTH! (well, you can, but please don't)

console.log(todoDb.find)
console.log(find);

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

app.get('/todos', function(req, res) {
  todoDb.find({}, function(error, todos) {
    res.render('todos/index', {
      error: error,
      todos: todos
    })
  })
})

// Tell our app to listen on port 3000

app.listen(3000, function() {
  console.log("Listening on 3k!");
})




// YOU DO QUESTION
// app.get("/home", function(req, res) {
//   res.render('home') //looking inside the views directory for a file called home 
// })


// REVIEW QUESTION?
// Knowing what you know, do you think it's ok to define more than one route on the same path? For example:
// This will work 
// These 2 things come together 
// app.get('/cars', function(req, res) {
// 	res.send('Here is a list of my cars...')
// })

// app.post('/cars', function(req, res) {
// 	res.send('Thanks for the new car!')
// })

