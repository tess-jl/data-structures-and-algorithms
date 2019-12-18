class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const node = new Node(value, null);
    if(this.isEmpty()) {
      this.front = node;
    } else {
      this.back.next = node;
    }
    this.back = node;
  }

  dequeue() {
    if(this.isEmpty()) return null;

    const front = this.front;
    this.front = this.front.next;
    if(this.isEmpty()) this.back = null;

    return front;
  }

  peek() {
    if(this.isEmpty()) return null;
    return this.front.value;
  }

  stringQueue() {
    let currentNode = this.front;
    let string = ''; 
    while(currentNode) {
      string += currentNode.value.name.toString() + ' , ';
      currentNode = currentNode.next;
    }
    return string; 
  }

  isEmpty() {
    return !this.front;
  }
}


class ShelterQueue {
  constructor() {
    this.catQueue = new Queue(); 
    this.dogQueue = new Queue(); 
  }

  string() {
    let currentNode = this.front;
    let string = ''; 
    while(currentNode) {
      string += currentNode.value.name.toString() + ' , ';
      currentNode = currentNode.next;
    }
    return string; 
  }

  isEmpty() {
    return !this.front;
  }

  putAnimalInCorrectQueue(obj) {
    if(obj.type === 'cat') {
      this.catQueue.enqueue(obj);
    } else if(obj.type === 'dog') {
      this.dogQueue.enqueue(obj);
    } else {
      return null;
    }
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

  dequeueByPref(pref) {
    if(pref === 'cat') {
      this.catQueue.dequeue();
    } else if(pref === 'dog') {
      this.dogQueue.dequeue();
    } else {
      return 'no animal of your preference to dequeue';
    }
    
  }
}

module.exports = { ShelterQueue, Node, Queue };
