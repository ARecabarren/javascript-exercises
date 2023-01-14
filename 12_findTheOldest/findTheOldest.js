const findTheOldest = function(peopleArray) {

    let oldest;
    let age = 0;
    let today = new Date();
    let tempAge;
    
    function computeAge(yearBirth) {
        let age = (new Date()) - (new Date(`${yearBirth}`));
        age = age / (1000*60*60*24*365)
        return age
    }
    
    for (const person of peopleArray) {
        if (person.yearOfDeath == undefined) {
            tempAge = computeAge(person.yearOfBirth)
            if(tempAge > age){
                age = tempAge; 
                oldest = person;
                continue
            }
            
        }

        tempAge = person.yearOfDeath - person.yearOfBirth
        if( tempAge> age){age = tempAge; oldest = person }
    }
    return oldest


};

// Do not edit below this line
module.exports = findTheOldest;
