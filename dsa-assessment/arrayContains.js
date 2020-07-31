/** Function that accepts an array and value, and returns whether that value appears in the array */

function arrayContains(nums, val) {

  let result = false;

  function _arrayContains(el) {

    if (Array.isArray(el)) {
      for (let l of el) {
        _arrayContains(l);
      }
    }
    if (el === val) result = true;
  }
  _arrayContains(nums);
  return result;

}

module.exports = arrayContains;