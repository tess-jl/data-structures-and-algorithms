const { mergeLists, LinkedList  } = require('./ll-merge.js');
  
describe('testing the ll merge function', () => {
  it('should return a merged linked list', () => {
    const newList1 = new LinkedList(2);
    newList1.insert(2);

    //new linked list with larger size
    const newList2 = new LinkedList(4);
    newList2.insert(3);
    newList2.insert(5);

    const newList = mergeLists(newList1, newList2);
    expect(newList.toString()).toEqual('2 -> 5 -> 3');
  });
}); 
