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
    expect(ll.length).toEqual(2);
  });

  it('tests if a specific value is included in the linked list', () => {
    ll.insert(1);
    ll.insert(2);
    const test1 = ll.includes(1);
    const test2 = ll.includes(3);

    expect(test1).toEqual(true);
    expect(test2).toEqual(false);
  });

  it('appends a specific value to the linked list', () => {
    ll.insert(1);
    ll.append(2);

    expect(ll.head.next.value).toEqual(2);
    expect(ll.head).toEqual({ 'next': { 'next': null, 'value': 2 }, 'value': 1 });
    expect(ll.length).toEqual(2);
  });

  it('creates a string that shows the linked list', () => {
    ll.insert(1);
    ll.append({ key: 'value' });

    expect(ll.toString()).toEqual('1 -> [object Object]');
  });

  it('inserts a value (valToInsert) BEFORE a reference value (ref)', () => {
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insertBefore(100, 2);
    expect(ll.toString()).toEqual('3 -> 100 -> 2 -> 1');
    ll.insertBefore(200, 3);
    expect(ll.toString()).toEqual('200 -> 3 -> 100 -> 2 -> 1');
  });

  it('inserts a value (valToInsert) AFTER a reference value (ref)', () => {
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insertAfter(100, 2);
    expect(ll.toString()).toEqual('3 -> 2 -> 100 -> 1');
    // ll.insertAfter(200, 1);
    // expect(ll.toString()).toEqual('200 -> 3 -> 100 -> 2 -> 1');
  });


  

});
