const { isObject, isFunction } = require('./identify')

/**
 * Creates a translator for a given map.
 * @param {Object} translations
 * @param {Function} notFound
 * @return {Function} reword
 */
module.exports = function reword(translations, /* optional */ notFound) {

  if(!isObject(translations))
    throw new TypeError(`Reword expects an object as its first argument.`)

  if(notFound && !isFunction(notFound))
    throw new TypeError(`Reword expects the second argument, if provided, to be a function.`)

  /**
   * Returns the reworded string.
   * @param {String} lookup
   * @returns {String} foundValue OR lookup (if not found)
   */
  return function translate(...lookup) {

    // create the result by mapping over the values in `lookup`
    // and then reducing over each value to find the nested result
    let result = lookup.map(function(value) {

      // if the value is a dot-concatenated string, split it on dots
      // and create an array of keys to perform a nested lookup with
      if ('string' === typeof value && value.indexOf('.') !== -1) {
        value = value.split('.')
      }

      // ensure value is an array, so we can call reduce on it
      if (!Array.isArray(value)) {
        value = [value]
      }

      // Reduce over the array starting with the translations as the initial value.
      // Either finds the translation or calls `notFound` if none exist
      return value.reduce(function(map, key) {
        key = String(key).trim()

        // return the correlated value in the map or if none is found then call `notFound`
        // with the original lookup. if `notFound` is undefined, simply return the lookup
        return map.hasOwnProperty(key) ? map[key] : notFound && notFound(lookup[0]) || lookup[0]
      }, translations)
    })

    // if there's only one result simply return it, not wrapped in an array
    return result.length === 1 ? result[0] : result
  }
}
