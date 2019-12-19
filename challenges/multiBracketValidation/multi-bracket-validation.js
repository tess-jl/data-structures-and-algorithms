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

//using a stack bc stacks are first in last out by nature 
function multiBracketValidation(str) {
  const stack = new Stack(); 
  stack.push('anchor'); 
  const matches = {
    ']': '[',
    '}': '{',
    ')': '('
  };
  for(let i of str) {
    const brackets = ['{', '}', '[', ']', '(', ')'];
    if(brackets.includes(i)) {
      matches[i] === stack.top.value ? stack.pop() : stack.push(i);
    }
  }
  return stack.top.value === 'anchor' ? true : false; 
}

module.exports = { multiBracketValidation }; 
