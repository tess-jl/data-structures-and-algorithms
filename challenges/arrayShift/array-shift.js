const insertShiftArray = (array, value) => {
  const middleIndex = Math.ceil((array.length - 1) / 2); 
  let result = [];
  let i; 
  
  //first part of array up until the middle
  for(let i = 0; i < middleIndex; i++) {
    result[i] = array[i]; 
  }
  //inserting into the middle
  result[middleIndex] = value;
  //rest of the array 
  for(middleIndex + 1; i > middleIndex && i < array.length; i++) {
    result[i] = array[i];
  }
  return result; 
};
    
module.exports = { insertShiftArray }; 
