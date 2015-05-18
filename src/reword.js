const { isObject, isFunction } = require('./identify')
const verify = require('./verify')

/**
 * Creates a translator for a given map.
 * @param {Object} translations
 * @param {Function} notFound
 * @return {Function} reword
 */
module.exports = (translations, /* optional */ notFound) => {
  if(!isObject(translations))
    throw new TypeError(`Reword expects an object as its first argument.`)

  if(notFound && !isFunction(notFound))
    throw new TypeError(`Reword expects the second argument, if provided, to be a function.`)

  if(!verify(translations))
    throw new Error(`Reword expects that the translations object contains string values only.`)

  /**
   * Returns the reworded string.
   * @param {String} lookup
   * @returns {String} foundValue OR lookup (if not found)
   */
  return function reword(lookup) {
    lookup = String(lookup).trim()

    return translations.hasOwnProperty(lookup)
      ? translations[lookup]
      : notFound && notFound(lookup) || lookup
  }
}
