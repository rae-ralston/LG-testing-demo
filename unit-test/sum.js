function sum (x, y) {
  if(typeof x !== 'number' || typeof y !== 'number') {
    throw new Error()
  }
  
  return x + y
}

module.exports = sum
