// var databaseName
// if (process.env.NODE_ENV === 'test') {
//   databaseName = 'lessontest'
// } else {
//   databaseName = 'lesson'
// }

const databaseName = process.env.NODE_ENV === 'test' ? 'lessontest' : 'lesson'
const pgp = require('pg-promise')();
const connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const db = pgp( connectionString );

function addUser(email) {
  return db.one('INSERT INTO users(email) VALUES ($1) RETURNING *', [email])
}

function findUserByEmail(email) {
  return db.any( 'SELECT * FROM users WHERE email=$1', [email])
}

module.exports = { addUser, findUserByEmail }
