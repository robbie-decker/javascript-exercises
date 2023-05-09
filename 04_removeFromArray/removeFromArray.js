// Filter out args in an array
const removeFromArray = function(myArray, ...args) {
    return myArray.filter(elem => !args.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
