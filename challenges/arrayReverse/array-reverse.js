const reverseArray = array => {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    newArray[i] = array[array.length - 1 - i]; 
  }
  return newArray; 
};

module.exports = { reverseArray }; 
