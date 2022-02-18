const letterPositions = require("../letterPositions");
const assertArraysEqual = require("../assertArraysEqual");

console.log(letterPositions("hello lighthouse"));
assertArraysEqual(letterPositions("hello").e, [1]);
