const without = function (source, itemToRemove) {
  return source.filter((item) => itemToRemove.indexOf(item) === -1);
};

module.exports = without;
