const assertArraysEqual = function (actual, expected) {
  if (
    actual[0] === expected[0] &&
    actual[1] === expected[1] &&
    actual[2] === expected[2]
  ) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (a, b) {
  if (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]) {
    return true;
  } else {
    return false;
  }
};

const letterPositions = function(sentence) {
  const results = {};
  const trimmedSentence = sentence.split(' ').join('')
  for (let i = 0; i < trimmedSentence.length; i++) {
    if (trimmedSentence[i] !== " ") {
      results[trimmedSentence[i]] ? results[trimmedSentence[i]].push(i) : results[trimmedSentence[i]] = [i];
    }
  }
  return results;
};
console.log(letterPositions("hello lighthouse"))
assertArraysEqual(letterPositions("hello").e, [1]);
