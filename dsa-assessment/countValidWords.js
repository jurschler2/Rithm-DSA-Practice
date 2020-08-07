/**
 * 
 */


const { BinaryTree } = require("../dsa-trees/binary-tree.js");

function countValidWords(bTree) {

  if (!(bTree instanceof BinaryTree)) throw new Error("Please submit a binary tree.")

  let wordCount = 0;

  if (!bTree.root) return wordCount;

  let current = bTree.root;
  let queue = [current];

  while (queue.length) {

    current = queue.shift();

    if (current.val.toLowerCase() !== 'stop') {
      wordCount++;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    };

  }

  return wordCount;

}

module.exports = countValidWords;