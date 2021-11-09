const { readLine, readStopWords } = require("./utils.js");
const wordUtils = require('./WordUtils.js');

const readPromise = readLine("Enter text: ");
readPromise.then(function (message) {
  const stopWords = readStopWords();
  stopWords.then(function (stopWords) {
    let output = wordUtils.countWords(message, new Set(stopWords));
    console.log("Number of words: " + output);
  });
});



