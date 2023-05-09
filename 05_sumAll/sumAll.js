const sumAll = function(start, end){
    // If not a number or negative, return ERROR
    if(typeof start != 'number' || typeof end != 'number' || start < 0 || end < 0){
        return "ERROR";
    }    
    
    if (start > end){
        // swap variables
        start = start + end;
        end = start - end;
        start = start - end;
    }
    // Factorial
    let sum = 0;
    for(let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
