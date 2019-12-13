const { LinkedList } = require('./linked-list'); 

describe('linked list tests', () => {
  let ll;
  beforeEach(() => {
    ll = new LinkedList();
  });

  it('instantiates an empty linked list', () => {
    expect(ll.head).toBeNull();
  });

  it('inserts a new node with the given value', () => {
    ll.insert(1);
    ll.insert(2);

    expect(ll.head.value).toEqual(2);
    expect(ll.toString()).toEqual('2 -> 1');
  });

  it('tests if a specific value is included in the linked list', () => {
    ll.insert(1);
    ll.insert(2);
    const test1 = ll.includes(1);
    const test2 = ll.includes(3);

    expect(test1).toEqual(true);
    expect(test2).toEqual(false);
  });
  
  // it('adds a new node with the given value to the end of the list', () => {
  //   const ll = '1 -> 2 -> 3 -> 4 -> 5';
  //   LinkedList.append(10); 
  // });
});
