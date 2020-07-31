/** Function that accepts an array and returns a new array containing every third value */


function everyThird(arr) {

  let output = [];
  const len = arr.length;
  if (len < 3) return output;

  function _everyThird(idx) {
    if (idx > len - 1) return;
    output.push(arr[idx])
    return _everyThird(idx+3);
  }

  _everyThird(2);
  return output;
}

module.exports = everyThird;