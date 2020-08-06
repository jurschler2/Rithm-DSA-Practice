const LinkedList = require("../dsa-arrays-linked-lists/linked-list.js");
const sumLists = require("./sumLists.js");

let list1;
let list2;

beforeEach(function() {
  list1 = new LinkedList();
  list2 = new LinkedList();

});


describe("Empty Lists", function() {
  it("Returns an empty list", function() {

    let output = sumLists(list1, list2);
    expect(output.length).toBe(0)

  });
});


describe("One empty list and one non-empty list", function() {
  it("returns a list with correctly added values", function() {

    list2.push(1);

    let output = sumLists(list1, list2);
    expect(output.length).toBe(1)
    expect(output.head.val).toBe(1);

  });
});

describe("Two non-empty lists", function() {
  it("returns a list with correctly added values", function() {

    list1.push(9);
    list1.push(1);
    list1.push(4);

    list2.push(6);
    list2.push(3);
    list2.push(6);

    let output = sumLists(list1, list2);
    expect(output.length).toBe(4)
    expect(output.head.val).toBe(1);
    expect(output.head.next.val).toBe(5);
    expect(output.head.next.next.val).toBe(5);
    expect(output.head.next.next.next.val).toBe(0);

  });
});