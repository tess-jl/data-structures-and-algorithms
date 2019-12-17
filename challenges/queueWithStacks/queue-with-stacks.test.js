const { PsuedoQueue } = require('./queue-with-stacks.js');


describe('pseudo quee code challenge', () => {
  it('should string the stack', () => {
    const pq = new PsuedoQueue;
    pq.stack1.push(1);
    pq.stack1.push(2);
    pq.stack1.push(3);

    expect(pq.string()).toEqual('3 , 2 , 1 , ');
  });

  it('should insert a value into the PsuedoQueue using and first in, first out approach on the stacks', () => {
    const pq = new PsuedoQueue;
    pq.stack1.push(1);
    pq.stack1.push(2);
    pq.stack1.push(3);
    pq.enqueue(5);

    expect(pq.string()).toEqual('3 , 2 , 1 , 5 , ');
  });

  it('should remove a value from stack1 of the PsuedoQueue using and first in, first out approach on the stacks', () => {
    const pq = new PsuedoQueue;
    pq.stack1.push(1);
    pq.stack1.push(2);
    pq.stack1.push(3);
    pq.dequeue(3);

    expect(pq.string()).toEqual('2 , 1 , ');
  });
}); 


