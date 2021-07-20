const spiralTraversal = require("../src/23_spiralTraversal");
describe("in spiral Order", () => {
  test("output", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    expect(spiralTraversal(matrix)).toBe("1243");
  });
});
