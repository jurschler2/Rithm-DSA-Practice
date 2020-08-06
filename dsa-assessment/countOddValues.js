/**
 * 
 */


const { BinaryTree } = require("../dsa-trees/binary-tree.js");

function countOddValues(bTree) {

  if (!(bTree instanceof BinaryTree)) throw new Error("Please submit a binary tree.")

  let oddCount = 0;

  if (!bTree.root) return oddCount;

  let current = bTree.root;
  let queue = [current];

  while (queue.length) {

    current = queue.shift();

    if (current.val % 2 === 1) oddCount++;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);

  }

  return oddCount;

}

module.exports = countOddValues;