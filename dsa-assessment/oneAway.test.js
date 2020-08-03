const oneAway = require("./oneAway.js");

let goodSameStr1 = 'make'
let goodSameStr2 = 'take'

let badSameStr1 = 'why'
let badSameStr2 = 'how'

let goodDiffStr1 = 'whoop'
let goodDiffStr2 = 'whoops'

let badDiffStr1 = 'king'
let badDiffStr2 = 'kinda'


describe("oneAway", function() {
  it("Correctly returns whether the strings are at most one edit away from being equal", function() {

    expect(oneAway(goodSameStr1, goodSameStr2)).toEqual(true);
    expect(oneAway(badSameStr1, badSameStr2)).toEqual(false);
    expect(oneAway(goodDiffStr1, goodDiffStr2)).toEqual(true);
    expect(oneAway(badDiffStr1, badDiffStr2)).toEqual(false);

  });
});