

module.exports = function(size) {
  var arr = new Array(size)
  while(size--) arr[size] = size
  return arr
}
