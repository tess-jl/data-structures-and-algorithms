const { fib } = require('./interview-02.js');
  
describe('testing the fib function', () => {
  it('should return value or number n in fibonnacci sequence', () => {
    expect(fib(2)).toEqual(2);
    expect(fib(1)).toEqual(1); 
  });
}); 
