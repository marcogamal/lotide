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

function middle(arr) {
  if (arr.length < 3) {
    return [];
  } else {
    let removeBeginning = arr.splice(0, arr.length / 2 + 1);
    let removeEnding = removeBeginning.splice(0, arr.length);
    return removeBeginning;
  }
}
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5, 6]))
