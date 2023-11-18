//iterative approach
function fibs(num){
    //8
    //index 0 = 0
    //index 1 = 1
    //index - 2 + index  - 1 = index
    //populate myArray with that index
    let myArray = [];
    myArray[0] = 0;
    myArray[1] = 1;
    for(i = 2; i < num; i++){
        myArray[i] = myArray[i-2] + myArray[i-1];
    }
    return myArray;
}

console.log(fibs(8));