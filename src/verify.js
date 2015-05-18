/**
 *  Given an object, iterates through all of the values
 *  ensuring that each is a String. Returns true if all
 *  values are Strings, otherwise returns false.
 */

module.exports = function verify(translations) {
  for (let key in translations) {
    if (typeof translations[key] !== 'string') {
      return false
    }
  }

  return true
}
