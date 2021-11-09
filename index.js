const { readLine } = require("./utils.js");

const readPromise = readLine("Enter text: ");
readPromise.then(function (message) {
  countWords(message);
});

function countWords(message) {
  let regEx = new RegExp("[a-zA-Z]+", "g");
  let matched = message.match(regEx);
  let arr = matched === null ? [] : [...matched];
  console.log("Number of words: " + arr.length);
}
