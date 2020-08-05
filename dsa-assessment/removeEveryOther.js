/**
 * Function that accepts a linked list, removes every other node of the linked list, and returns the modified linked list
 */


const LinkedList = require("../dsa-arrays-linked-lists/linked-list.js");

function removeEveryOther(ll) {

  if (!(ll instanceof LinkedList)) throw new Error("Please submit a linked list.");

  if (!ll.head || ll.length < 2) return ll;

  let cur = ll.head;
  let rem = cur.next;

  while (cur !== null) {

    if (rem === null) {
      cur = rem;
    } else {
      cur.next = rem.next;
      ll.length -= 1;
      cur = cur.next;
      rem = cur.next
    }
  }

  return ll;

}

module.exports = removeEveryOther;