import reword       from '../reword'
import translations from './fixtures/translations'

let t = reword(translations)

describe('reword', function() {

  it('returns a translated string', function() {
    let result = t('foo')
    expect(result).to.equal('bar')
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

    let spy  = sinon.spy()
    let stub = sinon.stub(console, 'warn', spy)

    it('returns the original string and warns the developer', function() {
      let result = t('not found')
      expect(spy.called)
      expect(result).to.equal('not found')
    })

  })

})
