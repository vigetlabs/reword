module.exports = {

  isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  },

  isFunction(fn) {
    return typeof fn === 'function'
  }

}
