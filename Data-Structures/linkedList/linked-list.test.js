const { LinkedList } = require('./linked-list'); 

describe('linked list tests', () => {

  it('inserts a new node with the given value', () => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);

    expect(ll.head.value).toEqual(2);
    expect(ll.toString()).toEqual('2 -> 1');
  });
  
  // it('adds a new node with the given value to the end of the list', () => {
  //   const ll = '1 -> 2 -> 3 -> 4 -> 5';
  //   LinkedList.append(10); 
  // });
});
