class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let cur = this.root;
    while (true) {
      if (val < cur.val) {
        if (!cur.left) {
          cur.left = newNode;
          return this;
        } else {
          cur = cur.left
        }
      } else if (val > cur.val) {
        if (!cur.right) {
          cur.right = newNode;
          return this;
        } else {
          cur = cur.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, cur=this.root) {

    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    if (val < cur.val) {
      if (!cur.left) {
        cur.left = newNode;
        return this;
      }
      return this.insertRecursively(val, cur.left); 
    } else if (val > cur.val) {
      if (!cur.right) {
        cur.right = newNode;
        return this;
      }
      return this.insertRecursively(val, cur.right);
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    let cur = this.root;
    let found = false;

    if (val === cur.val) return cur;

    while (cur && !found) {
      if (val < cur.val) {
        cur = cur.left;
      } else if (val > cur.val) {
        cur = cur.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return cur;

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, cur=this.root) {

    if (!this.root) return undefined;

    if (val < cur.val) {
      if (!cur.left) return undefined;
      return this.findRecursively(val, cur.left)
    } else if (val > cur.val) {
      if (!cur.right) return undefined;
      return this.findRecursively(val, cur.right)
    } 
    return cur;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

    let visited = [];

    if (!this.root) return visited;
    let cur = this.root;

    function DFSTraverse(node) {
      visited.push(node.val);
      if (node.left) DFSTraverse(node.left);
      if (node.right) DFSTraverse(node.right);
    }

    DFSTraverse(cur);
    return visited;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

    let visited = [];

    if (!this.root) return visited;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

    let visited = [];

    if (!this.root) return visited;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }

    traverse(this.root);
    return visited;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

    let visited = [];
    
    if (!this.root) return visited;

    let queue = [this.root];

    while (queue.length) {

      let cur = queue.shift();
      visited.push(cur.val);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);

    }

    return visited;

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
