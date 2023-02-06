const { josephusSurvivor } = require("./further-study");


describe("test the functionality of josephusSurvivor", function () {
  it("finds the survivor", function () {
    expect(josephusSurvivor(10, 3)).toBe(4);
    expect(josephusSurvivor(5, 10)).toBe(4);
    expect(josephusSurvivor(1, 1)).toBe(1);
    expect(josephusSurvivor(2, 2)).toBe(1);
  });

  it("requires valid input", function () {
    expect(() => josephusSurvivor(0, 3)).toThrow(Error);
    expect(() => josephusSurvivor(3, -1)).toThrow(Error);
  });
});
