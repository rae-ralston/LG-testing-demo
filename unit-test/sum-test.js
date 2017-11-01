let expect = require('chai').expect
let sum = require("./sum")

// Unit testing is the practice of testing small pieces of code, typically
// individual functions, alone and isolated. If your test uses some external
// resource, like the network or a database, it’s not a unit test.

describe('Sum: ', () => {
  it('will add two numbers', () => {
    expect(sum(1,2)).to.equal(3)
    expect(sum(10,10)).to.equal(20)
  })

  it('will throw an error if arguments are not type number', () => {
    expect(() => sum(1,[])).to.throw()
  })
})
