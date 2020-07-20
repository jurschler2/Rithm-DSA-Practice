/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {

    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  
    this.length += 1;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    
    this.length += 1;

  }

  /** pop(): return & remove last item. */

  pop() {

    if (!this.head) {
      throw new Error("Invalid");
    }

    let temp;

    if (this.length === 1) {

      temp = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return temp.val;

    } else {

      let current = this.head;
      let count = 0;

      while (count !== this.length - 2) {
        current = current.next;
        count += 1;
      }

      temp = this.tail;
      this.tail = current;
      this.length -= 1;
      return temp.val;

    }

  }

  /** shift(): return & remove first item. */

  shift() {

    let temp;

    if (!this.head) {
      return "Invalid";
    } else if (this.length === 1) {
      temp = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return temp;
    } else {
      temp = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      return temp;
    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid");
    }

    let current = this.head;
    let count = 0;

    while (current !== null && count !== idx) {
      count += 1;
      current = current.next;
    }

    return current.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid");
    }

    let current = this.head;
    let count = 0;

    while (current !== null && count !== idx) {
      count += 1;
      current = current.next;
    }

    current.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx > this.length || idx < 0) {
      throw new Error("Invalid");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);


    let current = this.head;
    let count = 0;

    while (current !== null && count !== idx - 1) {
      count += 1;
      current = current.next;
    }

    let newNode = new Node(val);
    newNode.next = current.next;
    current.next = newNode;
    this.length += 1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid");
    }

    if (idx === 0) return this.pop();



  }

  /** average(): return an average of all values in the list */

  average() {
    
    if (this.length === 0) return 0;


    let current = this.head;
    let sum = current.val;
    let count = 1;

    while (count < this.length) {
      current = current.next;
      sum += current.val;
      count += 1;
    }

    return sum / count;

  }
}

module.exports = LinkedList;
