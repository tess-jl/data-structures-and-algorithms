const wrapperFizzBuzzTree = require('./fizzBuzzTree.js'); 
const { BinaryTree } = require('../../Data-Structures/tree/tree.js');

describe('tests for fizzbuzz tree challenge', () => {
  it('coverts to either fizz, buzz, fizzbuzz, or a stringified number', () => {
    const tree = new BinaryTree();
    //value divisible by 3 --> Fizz
    tree.add(3);
    //value divisible by 5 --> Buzz
    tree.add(5);
    //value divisible by both 3 and 5 --> FizzBuzz
    tree.add(15);
    //tree not divisible by either 3 or 5 --> stringified number 
    tree.add(7);

    const freshFizzBuzzTree = wrapperFizzBuzzTree(tree); 

    expect(tree.preOrder(freshFizzBuzzTree)).toEqual(['Fizz', 'Buzz', 'FizzBuzz', '7']);
  });
}); 

