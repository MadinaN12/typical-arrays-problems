
exports.min = function min (array) {
  if (array == undefined || array.length === 0) return 0;
  var minm = array[0];

  for (var elem of array) {
    if (minm > elem) { minm = elem; }
  }
  
  return minm;
}

exports.max = function max (array) {
  if (array == undefined || array.length === 0) return 0;
  var maxm = array[0];

  for (var elem of array) {
    if (maxm < elem) { maxm = elem; }
  }
  
  return maxm;
}

exports.avg = function avg (array) {
  if (array == undefined ) return 0;
  var avr = 0;
  for (var i = 0; i < array.length; i++) {
    avr += array[i];
  }
  if (avr !== 0) avr = avr / array.length;
  return avr;
}