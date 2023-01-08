const sumAll = function(a,b) {
    if (typeof(a) == 'number' && typeof(b) == 'number') {
        if(a > 0 && b > 0){
            
            let lower = Math.min(a,b);
            let higher = Math.max(a,b);
            let iterations = higher - lower;
            let count = 0;
            
            for (let index = 1; index <= higher; index++) {
                count += index;
            
            } return count

        } else {return 'ERROR'}
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
