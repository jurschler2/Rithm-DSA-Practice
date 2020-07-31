const everyThird = require("./everyThird.js");

let goodArr = [1,2,3];
let goodArr2 = [1,2,3,4,5,6,7,8,9];

describe("everyThird", function() {
  it("Returns a new array with every third number if the array is long enough", function() {

    let output = everyThird(goodArr);
    expect(output.length).toBe(1);
    expect(output[0]).toBe(3);

    let output2 = everyThird(goodArr2);
    expect(output2.length).toBe(3);
    expect(output2[0]).toBe(3);
    expect(output2[1]).toBe(6);
    expect(output2[2]).toBe(9);
    
  });
});