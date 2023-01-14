const fibonacci = function(numTH) {
    let penultimate = 0;
    let last = 1;
    let fiboNumber;
    if(numTH<0){return 'OOPS'}
    numTH = parseInt(numTH);
    if(numTH == 1){return 1}
    
    for (let i = 0; i < numTH - 1; i++) {
        fiboNumber = penultimate + last;
        penultimate = last;
        last = fiboNumber;
    }
    return fiboNumber    

};

// Do not edit below this line
module.exports = fibonacci;
