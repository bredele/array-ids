

/**
 * Generate array of indexes with a given size.
 * Each item in the array contains its own index in the array.
 *
 * @param {Number} size
 * @return {Array}
 * @api public
 */

module.exports = function(size) {
  var arr = new Array(size)
  while(size--) arr[size] = size
  return arr
}
