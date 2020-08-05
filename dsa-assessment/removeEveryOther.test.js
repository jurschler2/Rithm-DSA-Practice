const LinkedList = require("../dsa-arrays-linked-lists/linked-list.js");
const removeEveryOther = require("./removeEveryOther.js");

let list;

beforeEach(function() {
  list = new LinkedList();
});


describe("Empty List", function() {
  it("Returns an empty list", function() {

    let output = removeEveryOther(list);
    expect(output.length).toBe(0)

  });
});


describe("List with length greater than 2", function() {
  it("returns a list with every other value removed", function() {

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);

    let output = removeEveryOther(list);
    expect(output.length).toBe(3)

    let outputArr = output.print();
    expect(outputArr[0]).toBe(1);
    expect(outputArr[1]).toBe(3);
    expect(outputArr[2]).toBe(5);

  });
});