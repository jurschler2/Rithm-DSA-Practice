/**
 * Function that accepts two linked lists which represent two numbers. Each
 */


const LinkedList = require("../dsa-arrays-linked-lists/linked-list.js");

function sumLists(l1, l2) {

  if (!(l1 instanceof LinkedList) || !(l2 instanceof LinkedList)) throw new Error("Please submit a linked list.");

  if (!l1.head && !l2.head) return new LinkedList();

  if (!l1.head) {
    return l2;
  } else if (!l2.head) {
    return l1;
  }

  let num1 = parseInt(l1.print().join(''))
  let num2 = parseInt(l2.print().join(''))

  let num3 = num1 + num2;

  let num3Arr = `${num3}`.split('');

  num3Arr = num3Arr.map(a => parseInt(a));

  let answer = new LinkedList(num3Arr);

  return answer;

}

module.exports = sumLists;