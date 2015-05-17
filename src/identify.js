export const isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export const isFunction = function isFunction(fn) {
  return typeof fn === 'function'
}
