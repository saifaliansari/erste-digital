const wordUtils = require("./wordUtils.js");

test("Testing stop words", function () {
  expect(
    wordUtils.countWords("Mary had a little lamb", new Set(["a"]))
  ).toEqual({ words: 4, unique: 4 ,average:4.25});
});

test("Testing empty", function () {
  expect(wordUtils.countWords(" ", new Set(["a"]))).toEqual({
    words: 0,
    unique: 0,
    average:0
  });
});

test("Testing without stop words", function () {
  expect(wordUtils.countWords("Mary had", new Set())).toEqual({
    words: 2,
    unique: 2,
    average:3.5
  });
});

test("Testing special chars", function () {
  expect(wordUtils.countWords("Mary$had", new Set())).toEqual({
    words: 2,
    unique: 2,
    average:3.5
  });
});

test("Testing special chars only", function () {
  expect(wordUtils.countWords("$", new Set())).toEqual({ words: 0, unique: 0 ,average:0});
});
test("Testing unique chars", function () {
  expect(
    wordUtils.countWords(
      "Humpty-Dumpty sat on a wall. Humpty-Dumpty had a great fall.",
      new Set(["the", "a", "on", "off"])
    )
  ).toEqual({ words: 7, unique: 6 ,average:6.43});
});
