const verify = require('../verify')

describe('verify', function() {

  it('returns TRUE if ALL members of the input object ARE Strings', function() {
    let result = verify({ foo: 'bar', baz: 'qux' })
    expect(result).to.be.true
  })

  it('returns FALSE if ANY members of the input object ARE NOT Strings', function() {
    let result = verify({ foo: 'bar', baz: 1 })
    expect(result).to.be.false
  })

})
