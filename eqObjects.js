const eqArrays = require('./eqArrays')
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (let element of key1) {
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      return eqArrays(object1[element], object2[element]);
    } else {
      if (object1[element] !== object2[element]) {
        return false;
      }
    }
  //   console.log(element);
  //   console.log(object1[element]);
  //   console.log(object2[element]);
  }
  return true;
};

module.exports = eqObjects