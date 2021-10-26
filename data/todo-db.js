const students = [
  {text: 'Feed llama', done: true, _id: 125223},
  {text: 'Sleep under the stars', done: false, _id: 127904},
  {text: 'Buy milk', done: false, _id: 139608},
]

// Todos.find({}, function() {
  // 
// })
const find = (conditions, callback) => {
  try { 
    // try the code here 
    if(!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) 
    return callback(null, todos)

  } catch (error) {
    // if there are errors are errors, run this code  
    console.log(error)
    callback(error, [])
  }
}

export {
  find
}