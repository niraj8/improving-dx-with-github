const isEven = require("./index");

const cases = [
  [0, true],
  [4, true],
  [100, true],
  [3, false],
  [5, false],
  [101, false],
]

test.each(cases)("isEven([%s]) should return [%s]", (n, expected) => {
  expect(isEven(n)).toBe(expected);
});
