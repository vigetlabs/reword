const reword       = require('../reword')
const translations = require('./fixtures/translations')

let t = reword(translations)

describe('reword', function() {

  it('throws if the provided translations are not an object', function() {
    try       { let t = reword('badArg') }
    catch (x) { expect(x instanceof TypeError).to.be.true }
  })

  it('throws if the provided notFound argument is not a function', function() {
    try       { let t = reword({}, 'badArg') }
    catch (x) { expect(x instanceof TypeError).to.be.true }
  })

  it('returns a translated string', function() {
    let result = t('foo')
    expect(result).to.equal('bar')
  })

  it('can return multiple translations', function() {
    let [first, second] = t('foo', 1)
    expect(first).to.eq('bar')
    expect(second).to.eq('one')
  })

  it('can return nested translations by taking an array of strings', function() {
    let result = t(['baz', 'qux', 'foo'])
    expect(result).to.equal('lul')
  })

  it('can return nested translations by taking a dot-concatenated string', function() {
    let result = t('baz.qux.foo')
    expect(result).to.equal('lul')
  })

  it('casts inputs to String', function() {
    let result = t(1)
    expect(result).to.equal('one')
  })

  it('trims strings before looking them up', function() {
    let result = t('   foo   ')
    expect(result).to.equal('bar')
  })

  describe('when given an unknown string', function() {

    it('calls the notFound handler if present', function() {
      let spy = sinon.spy()
      let t = reword(translations, spy)
      let result = t('not found')
      expect(spy.calledWith('not found'))
    })

    it('returns the original string by default', function() {
      let result = t('not found')
      expect(result).to.equal('not found')
    })

  })

})
