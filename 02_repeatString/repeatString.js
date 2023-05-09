const repeatString = function(string, numberOfLoops) {
    let newString = "";
    
    if(numberOfLoops < 0){
        return "ERROR";
    }
    
    for(let i = 0; i < numberOfLoops; i++){
        newString = newString + string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
