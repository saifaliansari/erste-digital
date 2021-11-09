const { readLine, readStopWords } = require("./utils.js");
const wordUtils = require("./wordUtils.js");

const readPromise = readLine("Enter text: ");
const stopWordsPromise = readStopWords().catch(()=>[]);
// let stopWordsPromise  = new Promise(function(resolve,reject){
//     readStopWords().then((stopWords)=>{
//         resolve(stopWords);
//     }).catch(()=>resolve([]));
// })
Promise.all([readPromise, stopWordsPromise]).then(function ([
  message,
  stopWords,
]) {
  let output = wordUtils.countWords(message, new Set(stopWords));
  console.log(
    `Number of words: ${output["words"]}, unique: ${output["unique"]}; average word length: ${output["average"]} characters`
  );
});
