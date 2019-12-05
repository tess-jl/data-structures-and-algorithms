//NOT A BINARY SEARCH!
// const binarySearch = (sortedArray, searchKey) => {
//   for(let i = 0; i < sortedArray.length; i++) {
//     if(sortedArray[i] === searchKey) {
//       return i; 
//     } 
//   }
//   return -1;
// };

const binarySearch = (arr, x) => { 
  let start = 0, end = arr.length - 1; 
  
  while(start <= end) { 
    let mid = Math.floor((start + end) / 2); 
    if(arr[mid] === x) return arr.indexOf(arr[mid]); 
    else if(arr[mid] < x) {
      start = mid + 1; 
    }
    else {
      end = mid - 1; 
    }
  } 
  return -1; 
};

module.exports = { binarySearch }; 
