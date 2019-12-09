// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
class NodeLinkedList {
  constructor{
    this.nodeValue = nodeValue;
    this.nextNode = nextNode; 

    // Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
    this.head = head;
  }

  insert (anyValue) {
    // Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

  }

  includes (anyValue) {
    // Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

  }

  toString () {
    // Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List.

  }


}


// Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

// Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).
