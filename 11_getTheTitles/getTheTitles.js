const getTheTitles = function(myArray) {
    let titles = [];
    for (const book of myArray) {
        titles[titles.length] = book.title
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
