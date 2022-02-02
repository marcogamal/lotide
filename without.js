const assertArraysEqual = function (actual, expected) {
  if (
    actual[0] === expected[0] &&
    actual[1] === expected[1] &&
    actual[2] === expected[2]
  ) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (a, b) {
  if (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]) {
    return true;
  } else {
    return false;
  }
};

const without = function (source, itemToRemove) {
  return source.filter((item) => itemToRemove.indexOf(item) === -1);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without(words, ["lighthouse"]));
