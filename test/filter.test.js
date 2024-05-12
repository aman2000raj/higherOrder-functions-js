const { default: filter } = require('../customFunctions/filter');

describe('filter function', () => {
  it('should return scores greater or equal to 70', () => {
    const scores = [70, 85, 90, 50, 65];

    const expected = [70, 85, 90];

    const result = filter(scores, (score) => score >= 70);

    expect(result).toEqual(expected);
  });
});
