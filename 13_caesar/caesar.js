const caesar = function(text,cipher) {
    
    function shiftCaesar(character, bottom, upper) {
        let unicode = character.charCodeAt() + cipher;
        let diff;
        // Positive case
        if(cipher > 0){
            while(unicode > upper){
                diff = unicode - upper;
                unicode = bottom - 1 + diff;
            }
            return String.fromCodePoint(unicode)
        // Negative case
        } else{
            while(unicode < bottom){
                diff = bottom - unicode;
                unicode = upper + 1 - diff;
            }
            return String.fromCodePoint(unicode)
        }
    }

    let newString = '' ;

    for (const char of text) {
        if(/[a-z]$/.test(char)){
            newString += shiftCaesar(char,97,122)
        }else if(/[A-Z]$/.test(char)){
            newString += shiftCaesar(char,65,90)
        }else{
            newString += char
        }
    }
    return newString
    
};

// Do not edit below this line
module.exports = caesar;
