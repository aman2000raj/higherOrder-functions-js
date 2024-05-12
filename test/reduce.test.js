const { default: reduce } = require('../customFunctions/reduce');

describe('reduce function', () => {
  it('should return sum of numbers array', () => {
    const numbers = [1, 2, 3, 4, 5];

    const expected = 15;
    const result = reduce(numbers, (sum = 0, number) => sum + number);
    expect(result).toBe(expected);
  });
});
