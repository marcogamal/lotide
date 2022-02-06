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

const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    // console.log('item BEFORE: ', item)
    // console.log('item AFTER: ', callback(item))
    // console.log('---')
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);
