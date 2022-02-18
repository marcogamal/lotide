const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function (sentence) {
  const results = {};
  const trimmedSentence = sentence.split(" ").join("");
  for (let i = 0; i < trimmedSentence.length; i++) {
    if (trimmedSentence[i] !== " ") {
      results[trimmedSentence[i]]
        ? results[trimmedSentence[i]].push(i)
        : (results[trimmedSentence[i]] = [i]);
    }
  }
  return results;
};

module.exports = letterPositions;
