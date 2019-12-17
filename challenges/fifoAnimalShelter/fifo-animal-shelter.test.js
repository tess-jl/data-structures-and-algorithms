const { ShelterQueue } = require('./fifo-animal-shelter.js');

describe('shelter queue code challenge', () => {
  it('should add string the queue', () => {
    const sq = new ShelterQueue;
    sq.enqueue({
      name: 'spot', 
      age: 5
    });

    expect(sq.string()).toEqual('1 , ');
  });

  // it('should insert a value into the PsuedoQueue using and first in, first out approach on the stacks', () => {
  //   const pq = new PsuedoQueue;
  //   pq.stack1.push(1);
  //   pq.stack1.push(2);
  //   pq.stack1.push(3);
  //   pq.enqueue(5);

  //   expect(pq.string()).toEqual('3 , 2 , 1 , 5 , ');
  // });

  // it('should remove a value from stack1 of the PsuedoQueue using and first in, first out approach on the stacks', () => {
  //   const pq = new PsuedoQueue;
  //   pq.stack1.push(1);
  //   pq.stack1.push(2);
  //   pq.stack1.push(3);
  //   pq.dequeue(3);

  //   expect(pq.string()).toEqual('2 , 1 , ');
  // });
}); 
