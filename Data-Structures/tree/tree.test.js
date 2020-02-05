const { BinaryTree } = require('./tree.js');

describe('BinaryTree tests', () => {
  it('can add one node to the proper location to begin a tree', () => {
    const tree = new BinaryTree();
    tree.add(10);
    expect(tree.root).toEqual({ 'left': null, 'right': null, 'value': 10 });
  });
  it('can add a left and a right node to a tree', () => {
    const tree = new BinaryTree();
    tree.add(11);
    tree.add(2);
    tree.add(16);

    console.log(tree);
    expect(tree).toEqual({ 
      'root': {
        'value': 11,
        'left': { 
          'value': 2, 
          'left': null, 
          'right': null
        }, 
        'right': {
          'value': 16, 
          'left': null, 
          'right': null
        }
      }
    });
  });

});
