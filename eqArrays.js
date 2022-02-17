const assertEqual = require('./assertEqual');

const eqArrays = function (a, b) {
  if (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays