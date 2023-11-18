//iterative approach
function fibsIterative(num){
    let myArray = [];
    myArray[0] = 0;
    myArray[1] = 1;

    for(i = 2; i < num; i++){
        myArray[i] = myArray[i-2] + myArray[i-1];
    }

    return myArray;
}

console.log(fibsIterative(8));



//recursive approach
function fibsRec(num) {
    if (num <= 0 || isNaN(num)) {
      return "Please enter a valid number."
    } else if (num === 1) {
        return [0]
    } else if (num === 2) {
        return [0, 1]
    } else if (num > 2) {
        return [...fibsRec(num-1), fibsRec(num - 1)[num - 2] + fibsRec(num-1)[num - 3]]
    }
  }
  
  console.log(fibsRec(3));
