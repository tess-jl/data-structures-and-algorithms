class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value, this.top);
    this.top = node;
  }

  pop() {
    if(!this.top) return null;

    const top = this.top;
    this.top = top.next;
    return top;
  }

  peek() {
    if(!this.top) return null;
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}

class PsuedoQueue {
  constructor() {
    //the stack that will stay in order
    this.stack1 = new Stack();
    //the stack where we will be flipping the order
    this.stack2 = new Stack();
  }

  string() {
    let currentNode = this.stack1.top;
    let string = ''; 
    while(currentNode) {
      string += currentNode.value.toString() + ' , ';
      currentNode = currentNode.next;
    }
    return string; 
  }

  enqueue(val) {
    //while stack 1 has nodes in it, push nodes into stack 2
    while(!this.stack1.isEmpty()) {
      const top = this.stack1.pop(this.stack1.top);
      this.stack2.push(top.value);
    }
    this.stack2.push(val);

    while(!this.stack2.isEmpty()) {
      const top = this.stack2.pop(this.stack2.top);
      this.stack1.push(top.value);
    }
    return this.stack1; 
  }

  dequeue() {
    this.stack1.pop();
    return this.stack1;
  }
}

module.exports = { PsuedoQueue, Stack, Node };
