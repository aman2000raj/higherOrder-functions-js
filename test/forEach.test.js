const { default: forEach } = require('../customFunctions/forEach');

describe('forEach function', () => {
  it('should print name of fruits and indexes', () => {
    const fruits = ['apple', 'orange', 'banana', 'cherry'];

    const mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});

    forEach(fruits, (fruit, index) => {
      console.log(`Fruits ${index + 1}: ${fruit}`);
    });

    expect(mockLog).toHaveBeenCalledTimes(fruits.length);
    expect(mockLog.mock.calls).toEqual([
      ['Fruits 1: apple'],
      ['Fruits 2: orange'],
      ['Fruits 3: banana'],
      ['Fruits 4: cherry'],
    ]);

    mockLog.mockRestore();
  });
});
