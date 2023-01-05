const reverseString = function(string) {
    let myArray = [];
    for (const letter of string) {
        myArray.splice(0,0,letter);
    }
    let myString = '';
    for(const item of myArray){
        if (item === ',') {continue;}
        myString += item
    } 
    return myString
};

// Do not edit below this line
module.exports = reverseString;
