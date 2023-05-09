const removeFromArray = function(myArray, ...args) {
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] in args){
            myArray.splice(i, 1);
        }
        console.log(i);
        // if(myArray[i] === args){
        //     myArray.splice(i, 1);
        // }
    }
    // console.log(myArray);
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
