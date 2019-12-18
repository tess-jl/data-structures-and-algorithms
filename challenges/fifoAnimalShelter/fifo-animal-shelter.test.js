const { ShelterQueue } = require('./fifo-animal-shelter.js');

describe('shelter queue code challenge', () => {
  it('should add an object to a queue and string the queue', () => {
    const sq = new ShelterQueue;
    sq.enqueue({
      name: 'spot', 
      type: 'dog',
      age: 5
    });

    expect(sq.string()).toEqual('spot , ');
  });

  it('should enqueue an animal in the correct queue', () => {
    const sq = new ShelterQueue;
    sq.putAnimalInCorrectQueue({
      name: 'spot', 
      type: 'dog',
      age: 5
    });

    expect(sq.dogQueue.stringQueue()).toEqual('spot , ');
  });

  // it('should remove a value from stack1 of the PsuedoQueue using and first in, first out approach on the stacks', () => {
  //   const pq = new PsuedoQueue;
  //   pq.stack1.push(1);
  //   pq.stack1.push(2);
  //   pq.stack1.push(3);
  //   pq.dequeue(3);

  //   expect(pq.string()).toEqual('2 , 1 , ');
  // });
}); 
