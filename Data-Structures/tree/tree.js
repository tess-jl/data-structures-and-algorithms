class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = new Node(value);
    if(!this.root) this.root = node;
    else {
      //traverse and add node 
      let current = this.root; 
      while(current) {
        if(node.value < current.value) {
          if(!current.left) {
            current.left = node; 
            break;
          }
          current = current.left;

        } else if(node.value > current.value) {
          if(!current.right) {
            current.right = node; 
            break;
          }
          current = current.right;
        } else {
          return null; 
        }
      }
    }
    return this; 
  }



  preOrder(node) {
    
  }

  // inOrder()
  // postOrder()
  //custom errors
}

// class SearchBinaryTree {

//   add() {

//   }

//   // contains()

// }

module.exports = { Node, BinaryTree };
