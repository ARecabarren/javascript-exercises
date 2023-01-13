const palindromes = function (string) {
    let cleanString = ''
    // label:checkChar
    for (const character of string) {
        if (character == '.' || character == ',' || character == ' ' ||
            character == '!'){continue} 
        else{
            cleanString += character;
        }
    }
    return cleanString.toLowerCase()

    

};

// Do not edit below this line
module.exports = palindromes;
