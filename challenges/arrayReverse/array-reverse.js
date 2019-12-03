// Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

const reverseArray = array => {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    newArray[i] = array[array.length - 1 - i]; 
  }
  return newArray; 
};

module.exports = { reverseArray }; 