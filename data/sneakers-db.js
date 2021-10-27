const sneakers = [
  {name: 'Jordan 2', good: false, type: 'basketball shoe'},
  {name: 'Jordan 4', good: true,  type: 'basketball shoe'},
  {name: 'Jordan 11', good: true,  type: 'basketball shoe'},
]

const find = (conditions, callback) => {
  try { 
    if(!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) 
    return callback(null, sneakers)

  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export {
  find
}