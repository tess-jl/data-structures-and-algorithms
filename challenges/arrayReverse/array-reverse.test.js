const {
  reverseArray
} = require('./array-reverse.js');

describe('validator module', () => {
  it('should reverse an array', () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });
}); 
