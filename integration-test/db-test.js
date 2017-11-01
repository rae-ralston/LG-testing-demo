let { expect } = require('chai')
let { addUser, findUserByEmail } = require("./db")

describe('addUser: ', () => {
  it('will add a user to the database', () => {
    addUser('test@test.test').then(user => {
      expect(user.id).to.be.a('number')
      expect(user.email).to.equal('test@test.test')
    })
  })
})

describe('findUserByEmail: ', () => {
  it('will find a user by their email', () => {
    findUserByEmail('test@test.test').then(user => {
      expect(user[0].id).to.be.a('number')
      expect(user[0].email).to.equal('test@test.test')
    })
  })
})
