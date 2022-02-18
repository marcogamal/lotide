const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (
    actual[0] === expected[0] &&
    actual[1] === expected[1] &&
    actual[2] === expected[2]
  ) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

module.exports = assertObjectsEqual;
