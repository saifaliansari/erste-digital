function countWords(message, stopWords) {
  let regEx = new RegExp("[a-zA-Z-]+", "g");
  let matched = message.match(regEx);
  let words = matched === null ? [] : [...matched];
  let totalChars = 0;
  let acceptableWords = words.filter(function (element) {
    if (!stopWords.has(element)) {
      totalChars += element.length;
      return true;
    }
    return false;
  });
  const unique = new Set(acceptableWords);
  const average =
    totalChars === 0
      ? 0
      : Number((totalChars / acceptableWords.length).toFixed(2));
  return {
    words: acceptableWords.length,
    unique: unique.size,
    average: average,
  };
}

module.exports = { countWords };
