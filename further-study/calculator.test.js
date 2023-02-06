const { calculator: calc } = require("./further-study");


describe("test the functionality of the calculator", function () {
  it("can sum values", function () {
    expect(calc("+ 1")).toBe(1);
    expect(calc("+ 1 2")).toBe(3);
    expect(calc("+ 1 2 3")).toBe(6);
  });

  it("can subtract values", function () {
    expect(calc("- 3")).toBe(3);
    expect(calc("- 1 2")).toBe(-1);
    expect(calc("- 1 2 3")).toBe(-4);
  });

  it("can mulitiply values", function () {
    expect(calc("* 2")).toBe(2);
    expect(calc("* 1 2")).toBe(2);
    expect(calc("* 1 2 3")).toBe(6);
  });

  it("can divide values", function () {
    expect(calc("/ 4")).toBe(4);
    expect(calc("/ 4 2")).toBe(2);
    expect(calc("/ 16 2 4")).toBe(2);
  });

  it("can handle two opperation types", function () {
    expect(calc("* 2 + 1 2")).toBe(6);
    expect(calc("+ 9 * 2 3")).toBe(15);
    expect(calc("- 9 * 2 3")).toBe(3);
    expect(calc("/ 6 - 4 2")).toBe(3);
  });

  it("can handle more complex two opperation types", function () {
    expect(calc("- 15 5 + 1 2 4")).toBe(3);
    expect(calc("+ 9 1 * 2 3")).toBe(16);
    expect(calc("- 9 3 * 2 3")).toBe(0);
    expect(calc("/ 8 2 - 4 2")).toBe(2);
  });

  it("can handle three opperation types", function () {
    expect(calc("- 14 2 * 2 2 + 1 2")).toBe(0);
    expect(calc("/ 24 2 + 1 1 * 2 2")).toBe(2);
  });

  it("can handle empty values", function () {
    expect(calc("")).toBe(null);
    expect(calc()).toBe(null);
  });
});
