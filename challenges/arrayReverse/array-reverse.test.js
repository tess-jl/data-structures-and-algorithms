const {
  reverseArray
} = require('./array-reverse.js');

describe('array-reverse code challenge', () => {
  it('should reverse an array', () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12])).toEqual([-12, 823, -923, 10, 23, 3546, 2354, 89]); 
  });
}); 
