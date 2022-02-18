const takeUntil = function (array, callback) {
  let data = [];
  for (let element of array) {
    if (callback(element) === false) {
      data.push(element);
    } else {
      return data;
    }
  }
};

module.exports = takeUntil;
