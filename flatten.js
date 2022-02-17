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

const flatten = function (array) {
  // get array with other arrays inside
  // we have to go thorugh each item and figure out if it's another array or not (loop asking for isArray?)
  // we need another array to kick off items to
  // If it's not an array then kick it out to another array as it is
  // if it is an array
  //go through the array and push the items inside the array to the kick off
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const element of array[i]) {
        flattenedArray.push(element);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
