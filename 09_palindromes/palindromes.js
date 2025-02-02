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
    cleanString = cleanString.toLowerCase();
    
    function isPalindrom(text){
        if(text.length == 1 || text.length == 0){
            return true
        }else if(text[0] == text[text.length-1]){
            return true && isPalindrom(text.substring(1,text.length-1))
        }else{
            return false
        }
    }
    
    return isPalindrom(cleanString)

};

// Do not edit below this line
module.exports = palindromes;
