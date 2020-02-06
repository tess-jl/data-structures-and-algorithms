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

  contains(value) {
    var current = this.root;
    while(current) {
      if(value === current.data) {
        return true;
      }
      if(value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  
  preOrder() {
    if(this.root == null) {
      return null;
    }
    const preOrderArray = [];
    (function castPreArray(current){
      if(current){
        preOrderArray.push(current.value);
        castPreArray(current.left);
        castPreArray(current.right);
      }
    }).apply(null, [this.root]);
    return preOrderArray;
  }

  inOrder() {
    if(this.root == null) {
      return null;
    }
    const inOrderArray = [];
    (function castInOrderArray(current){
      if(current){
        castInOrderArray(current.left);
        inOrderArray.push(current.value);
        castInOrderArray(current.right);
      }
    }).apply(null, [this.root]);
    return inOrderArray;
  }

  postOrder() {
    if(this.root == null) {
      return null;
    }
    const postOrderArray = [];
    (function castPostOrderArray(current){
      if(current){
        castPostOrderArray(current.left);
        castPostOrderArray(current.right);
        postOrderArray.push(current.value);
      }
    }).apply(null, [this.root]);
    return postOrderArray;
  }
}



module.exports = { Node, BinaryTree };
