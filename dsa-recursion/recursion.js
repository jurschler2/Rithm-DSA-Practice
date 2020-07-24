/** product: calculate the product of an array of numbers. */

function product(nums) {
  
  let prod = 1;
  let i = 0;

  function _product(nums, idx) {
    if (idx === nums.length) return 1;
    prod *= nums[idx];
    return prod * _product(nums, idx + 1);
  }

  _product(nums, i);
  return prod;

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {

  let l = 0;
  let i = 0;

  function _longest(words, idx) {
    if (idx === words.length) return;
    if (words[idx].length > l) {
      l = words[idx].length;
    }
    return _longest(words, idx + 1);
  }
  _longest(words, i);
  return l;
  
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {

  let output = "";
  let i = 0;

  function _everyOther(s, idx) {
    if (idx === s.length) return;
    if (idx % 2 === 0) output += s[idx];
    return _everyOther(s, idx + 1)
  }
  
  _everyOther(str, i);
  return output;

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  let start = 0;
  let end = str.length - 1;

  function _isPalindrome(s, stIdx, eIdx) {
    if (eIdx <= stIdx) return true;
    if (s[stIdx] !== s[eIdx]) return false;
    return _isPalindrome(s, stIdx+1, eIdx-1)
    }
  return _isPalindrome(str, start, end);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

  let i = 0;
  let output = -1;

  function _findIndex(a, v, idx) {
    if (idx === a.length) return;
    if (a[idx] === v) return output = idx;
    return _findIndex(a, v, idx + 1);
  }

  _findIndex(arr, val, i);
  return output;

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

  let rev = "";
  let i = str.length - 1;

  function _revString(s, idx) {
    if (idx === -1) return;
    rev += s[idx];
    return _revString(s, idx-1);
  }

  _revString(str, i);
  return rev;

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") arr.push(obj[key]);
    if (typeof obj[key] === "object") arr.push(...gatherStrings(obj[key]));
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, l=0, r=arr.length) {

  if (l > r) return -1;
  
  let m = Math.floor((r + l) / 2);

  if (arr[m] === val) return m;
  if (arr[m] > val) return binarySearch(arr, val, l, m - 1);
  return binarySearch(arr, val, m + 1, r);

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
