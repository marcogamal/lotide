const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
// have to loop
// result is an object
// space not counted therefore deleted
// count each letter

function countLetters(str) {
  let count = {};
  const trimmedStr = str.split(' ').join('')
  for (let i = 0; i < trimmedStr.length; i++) {
      let lowerStr = trimmedStr[i].toLowerCase();
      if (count[lowerStr] > 0) {
          count[lowerStr]++;
      } 
      else {
          count[lowerStr] = 1;
      }
  }
  return count;
}
console.log(countLetters("lighthouse in the house"))

// would return 
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }