// Write a function called mergeLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
//code shared with me and Joel from our whiteboarding exercise
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }

  includes(value) {
    let thisNode = this.head;
    while(thisNode){
      if(value === thisNode.value) return true;
      thisNode = thisNode.next;
    }
    return false;
  }

  toString() {
    let thisNode = this.head;
    let valuesStringed = '';
    while(thisNode){
      if(!thisNode.next) {
        valuesStringed += thisNode.value.toString();
      } else {
        valuesStringed += thisNode.value.toString() + ' -> ';
      }
      thisNode = thisNode.next;
    }
    return valuesStringed;
  }

  append(value) {
    let currentNode = this.head;
    const newNode = new Node(value, null);

    while(currentNode.next) currentNode = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }

  insertBefore(valToInsert, ref) {
    let currentNode = this.head;
    let previous = this.head; 

    if(this.head.value === ref) {
      this.insert(valToInsert);
      return;
    }

    while(currentNode) {
      if(currentNode.value === ref) { 
        const nodeToInsert = new Node(valToInsert, currentNode); 
        previous.next = nodeToInsert; 
        this.length++;
        return;
      }
      currentNode = previous; 
      currentNode = currentNode.next; 
    }
  }

  insertAfter(valToInsert, ref) {
    let currentNode = this.head;
    let previous = this.head; 
    
    while(currentNode) {
      if(currentNode.value === ref) { 
        const nodeToInsert = new Node(valToInsert, currentNode.next); 
        currentNode.next = nodeToInsert;
        this.length++;
        return;
      }
      currentNode = previous; 
      currentNode = currentNode.next; 
    }
  }




}

function mergeLists(ll1, ll2) {
  let ll1Node = ll1.head;
  let ll2Node = ll2.head;

  while(ll1Node && ll2Node) {
    if(ll1Node.head) ll2Node.next = ll1Node.next; 
    ll1Node.next = ll2Node;
    //iterate
    ll1Node = ll1Node.next;
    ll2Node = ll2Node.next;
  }
  return ll1;
}

module.exports = { mergeLists, LinkedList }; 
