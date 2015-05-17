import * as identify from '../identify'

describe('identify', function() {

  it('exposes two methods, isObject and isFunction', function() {
    expect(identify.isObject).to.be.defined
    expect(identify.isFunction).to.be.defined
    expect(typeof identify.isObject).to.equal('function')
    expect(typeof identify.isFunction).to.equal('function')
  })

  describe('isObject', function() {

    it('returns TRUE if the argument IS an object', function() {
      let result = identify.isObject({})
      expect(result).to.be.true
    })

    it('returns FALSE if the argument IS NOT an object', function() {
      let result = identify.isObject([])
      expect(result).to.be.false
    })

  })

  describe('isFunction', function() {

    it('returns TRUE if the argument IS a function', function() {
      let result = identify.isFunction(function() {})
      expect(result).to.be.true
    })

    it('returns FALSE if the argument IS NOT a function', function() {
      expect(identify.isFunction({})).to.be.false
      expect(identify.isFunction([])).to.be.false
      expect(identify.isFunction(3)).to.be.false
    })

  })

})
