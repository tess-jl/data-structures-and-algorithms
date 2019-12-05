const { binarySearch } = require('./array-binary-search.js');
  
describe('array binary search code challenge', () => {
  it('should search for value in array', () => {
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1); 
    expect(binarySearch([4, 8, 15, 16, 23, 42], 23)).toEqual(4);
    expect(binarySearch([4, 8, 15, 16, 23, 42], 4)).toEqual(0);
  });
}); 
