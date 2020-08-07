const { BinaryTreeNode, BinaryTree } = require("../dsa-trees/binary-tree.js");
const countValidWords = require("./countValidWords.js")

let stopTree;
let goTree;
let manyWordTree;
let emptyTree;

beforeAll(function() {
  emptyTree = new BinaryTree();

  // build no odds tree;
  let stopLeft = new BinaryTreeNode("please");
  let stopRight = new BinaryTreeNode("read");
  let stopRoot = new BinaryTreeNode("stop", stopLeft, stopRight);
  stopTree = new BinaryTree(stopRoot);

  // build no odds tree;
  let goLeft = new BinaryTreeNode("please");
  let goRight = new BinaryTreeNode("read");
  let goRoot = new BinaryTreeNode("go", goLeft, goRight);
  goTree = new BinaryTree(goRoot);

  // build some odds tree
  let node6 = new BinaryTreeNode("hello");
  let node5 = new BinaryTreeNode("what");
  let node4 = new BinaryTreeNode("hi");
  let node3 = new BinaryTreeNode("stop", node4, node6);
  let node2 = new BinaryTreeNode("go", node3, node5);
  let node1 = new BinaryTreeNode("another");
  let root = new BinaryTreeNode("word", node1, node2);
  manyWordTree = new BinaryTree(root);
});

describe("Empty tree", function() {
  it("Returns zero", function() {

    expect(countValidWords(emptyTree)).toBe(0)

  });
});

describe("Tree with a 'stop' at the root", function() {
  it("Returns correct count", function() {

    expect(countValidWords(stopTree)).toBe(0)

  });
});

describe("Tree with several valid words and a 'stop' value down in the tree", function() {
  it("Returns correct count", function() {

    expect(countValidWords(manyWordTree)).toBe(4)

  });
});

describe("Tree with no 'stop' values", function() {
  it("Returns correct count", function() {

    expect(countValidWords(goTree)).toBe(3)

  });
});