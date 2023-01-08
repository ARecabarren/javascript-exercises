const removeFromArray = function(array,toRemove) {
    for (let j = 1; j < arguments.length; j++) {
         for (let i = 0; i < array.length; i++) {
            if(arguments[j] === array[i]) array.splice(i,1);    
        }     
    }
    return array
   
};

// Do not edit below this line
module.exports = removeFromArray;
