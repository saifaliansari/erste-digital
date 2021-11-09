

function countWords(message, stopWords) {
    let regEx = new RegExp("[a-zA-Z]+", "g");
    let matched = message.match(regEx);
    let words = matched === null ? [] : [...matched];
    let acceptableWords = words.filter(function (element) {
      return !stopWords.has(element);
    });
    return acceptableWords.length;
}

module.exports={countWords}