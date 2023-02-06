const { balancedBrackets } = require("./further-study");

describe("test the functionality of balancedBrackets", function () {
  it("returns true when the brackets are balanced", function () {
    expect(balancedBrackets('')).toBe(true);
    expect(balancedBrackets('hello')).toBe(true);
    expect(balancedBrackets('(hi)[there]')).toBe(true);
    expect(balancedBrackets('[()][(a)(b)]()')).toBe(true);
  });

  it("returns false when the brackets are not balanced", function () {
    expect(balancedBrackets('((a)')).toBe(false);
    expect(balancedBrackets('(] (b)')).toBe(false);
    expect(balancedBrackets('((a) ([)] (c)')).toBe(false);
    expect(balancedBrackets('(((hi)))))')).toBe(false);
    expect(balancedBrackets('[]][[]')).toBe(false);
  });
});
