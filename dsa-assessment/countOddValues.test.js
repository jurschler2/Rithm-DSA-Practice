const { BinaryTreeNode, BinaryTree } = require("../dsa-trees/binary-tree.js");
const countOddValues = require("./countOddValues.js")

let evenTree;
let oddTree;
let emptyTree;

beforeAll(function() {
  emptyTree = new BinaryTree();

  // build no odds tree;
  let smallLeft = new BinaryTreeNode(2);
  let smallRight = new BinaryTreeNode(4);
  let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
  evenTree = new BinaryTree(smallRoot);

  // build some odds tree
  let node6 = new BinaryTreeNode(1);
  let node5 = new BinaryTreeNode(1);
  let node4 = new BinaryTreeNode(2);
  let node3 = new BinaryTreeNode(3, node4, node6);
  let node2 = new BinaryTreeNode(5, node3, node5);
  let node1 = new BinaryTreeNode(5);
  let root = new BinaryTreeNode(6, node1, node2);
  oddTree = new BinaryTree(root);
});

describe("Empty tree", function() {
  it("Returns zero", function() {

    expect(countOddValues(emptyTree)).toBe(0)

  });
});

describe("Tree with no odd values", function() {
  it("Returns correct count", function() {

    expect(countOddValues(evenTree)).toBe(0)

  });
});

describe("Tree with some odd values", function() {
  it("Returns correct count", function() {

    expect(countOddValues(oddTree)).toBe(5)

  });
});