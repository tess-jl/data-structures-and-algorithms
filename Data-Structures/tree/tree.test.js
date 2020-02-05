const { BinaryTree } = require('./tree.js');

describe('BinaryTree tests', () => {
  it('can add one node to the proper location to begin a tree', () => {
    const tree = new BinaryTree();
    tree.add(10);
    expect(tree.root).toEqual({ 'left': null, 'right': null, 'value': 10 });
  });



});



