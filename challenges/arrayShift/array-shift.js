const insertShiftArray = (array, value) => {
  const middleIndex = Math.ceil((array.length - 1) / 2); 
  let result = [];
  let resultIndex = 0; 
  
  for(let i = 0; i < array.length; i++) {
    i === middleIndex ? result[resultIndex] = value : result[resultIndex] = array[i]; 
    resultIndex++;
  }
  return result; 
};
    
module.exports = { insertShiftArray }; 
