/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {

    if (this.root === null) return 0;

    let sum = this.root.val;

    function _sumValues(cur) {

      for (let c of cur.children) {
        if (c.val !== null) sum += c.val;
        if (c.children.length > 0) return _sumValues(c);
      }
    }
    _sumValues(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

    if (this.root === null) return 0;

    let count = 0;

    if (this.root.val % 2 === 0) count += 1;

    function _countEvens(cur) {

      for (let c of cur.children) {
        if (c.val % 2 === 0) count += 1;
        if (c.children.length > 0) return _countEvens(c);
      }
    }
    _countEvens(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

    if (this.root === null) return 0;

    let count = 0;

    if (this.root.val > lowerBound) count += 1;

    function _numGreater(cur) {

      for (let c of cur.children) {
        if (c.val > lowerBound) count += 1;
        if (c.children.length > 0) return _numGreater(c);
      }
    }
    _numGreater(this.root);
    return count;

  }
}

module.exports = { Tree, TreeNode };
