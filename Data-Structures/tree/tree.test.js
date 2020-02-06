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

  it('can tell if a tree contains a given value', () => {
    const tree = new BinaryTree();
    tree.add(7);
    tree.add(2);
    tree.add(17);

    expect(tree.contains(7)).toBeTruthy;
    expect(tree.contains(20)).toBeFalsy;
  });

  it('can provide the order of values in node from NLR, preorder', () => {
    const tree = new BinaryTree();
    tree.add(7);
    tree.add(2);
    tree.add(17);

    expect(tree.preOrder()).toEqual([7, 2, 17]);
  });

  it('can provide the order of values in node from LNR, inorder', () => {
    const tree = new BinaryTree();
    tree.add(7);
    tree.add(2);
    tree.add(17);
    

    expect(tree.inOrder()).toEqual([2, 7, 17]);
  });

  it('can provide the order of values in node from LRN, postorder', () => {
    const tree = new BinaryTree();
    tree.add(7);
    tree.add(2);
    tree.add(17);

    expect(tree.postOrder()).toEqual([2, 17, 7]);
  });



});
