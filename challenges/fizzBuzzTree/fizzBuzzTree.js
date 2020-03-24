const fizzBuzzTree = (treeRoot) => {
  if(treeRoot !== null) {
    if(treeRoot.value % 3 === 0 && treeRoot.value % 5 === 0){
      treeRoot.value = 'FizzBuzz';
    } 
    else if(treeRoot.value % 3 === 0){
      treeRoot.value = 'Fizz';
    }
    else if(treeRoot.value % 5 === 0){
      treeRoot.value = 'Buzz';
    }
    else treeRoot.value = treeRoot.value.toString();
    fizzBuzzTree(treeRoot.left); 
    fizzBuzzTree(treeRoot.right); 
  } 
}; 

const wrapperFizzBuzzTree = (tree) => {
  fizzBuzzTree(tree.root);
};

module.exports = wrapperFizzBuzzTree; 
