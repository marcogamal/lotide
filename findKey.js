const findKey = function (object, callback) {
  let result = "";
  for (let element in object) {
    if (callback(object[element])) {
      // console.log(object[element])
      // console.log(element)
      // console.log(object)
      return element;
    }
  }
};

module.exports = findKey;
