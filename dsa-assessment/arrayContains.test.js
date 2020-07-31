const arrayContains = require("./arrayContains.js");

let goodEx1 = [1, 2, 3, 7, 9];
let badEx1 = [1, 2, 3, 9];

let goodEx2 = [1, 2, 3, [[7], 8], 9];
let badEx2 = [1, 2, 3, [[14], 8], 9];

describe("arrayContains", function() {
  it("Returns true if array contains the provided value", function() {

    expect(arrayContains(goodEx1, 7)).toBe(true);
    expect(arrayContains(badEx1, 7)).toBe(false);
    expect(arrayContains(goodEx2, 7)).toBe(true);
    expect(arrayContains(badEx2, 7)).toBe(false);
    
  });
});