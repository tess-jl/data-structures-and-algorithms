//code shared with me and Joel from our whiteboarding exercise
class Node {
  //each node has a value, and a next 
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    //in order to get every node in the chain you need a reference to the first node!! akak the head, linked list starts out with nothing in it so it starts out as null 
    this.head = null;
    this.length = 0;
  }

  insert(value) {
    //create a new node, set the next value as the head since we're inserting in front of the head
    const newNode = new Node(value, this.head);
    //reset head to the node inserted
    this.head = newNode;
    this.length++;
  }

  includes(value) {
    let thisNode = this.head;
    //while there is a node to check
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

  //RYAN'S VERSION
  // toString2() {
  //   if(!this.head) return '';
  //   const nodes = [];
  //   let node = this.head;
  //   while(node) {
  //     nodes.push(node.value);
  //     node = node.next;
  //   }
  //   return nodes.join(' --> ');
  // }

  //append(value) which adds a new node with the given value to the end of the list
  append(value) {
    let currentNode = this.head;
    const newNode = new Node(value, null);

    while(currentNode.next) currentNode = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }


  //insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
  //search for the value
  insertBefore(valToInsert, ref) {
    //create two variables that can later be separated
    let currentNode = this.head;
    let previous = this.head; 

    if(this.head.value === ref) {
      this.insert(valToInsert);
      return;
    }

    while(currentNode) {
      //once we reach the value we want to insert before
      if(currentNode.value === ref) { 
        //create a new node with the newVal param and set it equal to the head
        // const nodeToInsert = new Node(valToInsert, this.head); 
        //this.head is equal to currentNode! currentNode is actually the NEXT node in the sequence 
        const nodeToInsert = new Node(valToInsert, currentNode); 
        previous.next = nodeToInsert; 
        this.length++;
        return;
      }
      //if haven't found value then keep currentNode same as previous 
      currentNode = previous; 
      //iterate 
      currentNode = currentNode.next; 
    }
  }
  //insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node
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

module.exports = { LinkedList };
