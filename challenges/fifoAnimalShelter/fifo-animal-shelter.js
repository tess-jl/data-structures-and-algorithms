class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


class ShelterQueue {
  constructor() {
    this.front = null; 
    this.back = null; 
  }

  string() {
    let currentNode = this.front;
    let string = ''; 
    while(currentNode) {
      string += currentNode.value.toString() + ' , ';
      currentNode = currentNode.next;
    }
    return string; 
  }

  isEmpty() {
    return !this.front;
  }

  putAnimalInCorrectQueue(obj) {
    
  }

  enqueue(obj) {
    const node = new Node(obj, null);
    if(this.isEmpty()) {
      this.front = node;
    } else {
      this.back.next = node;
    }
    this.back = node;
  }

  dequeue() {
    this.stack1.pop();
    return this.stack1;
  }
}

module.exports = { ShelterQueue, Node };