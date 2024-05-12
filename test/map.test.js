//const { default: map } = require("../customFunctions/map");
import map from '../customFunctions/map.js';


describe('map function', () => {
  it('should return an array whose elements are doubles the initial value', () => {
    const numbers = [1, 2, 3, 4, 5];
    const expected = [2, 4, 6, 8, 10];

    const result = map(numbers, (element) => element * 2);

    expect(result).toEqual(expected);
  });

  
});
