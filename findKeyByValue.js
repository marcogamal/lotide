const findKeyByValue = function (title, name) {
  let genreArray = Object.keys(title);
  for (let element of genreArray) {
    if (title[element] === name) {
      console.log(title[element]);
      console.log(element);
      console.log(genreArray);
      return element;
    }
  }
};

module.exports = findKeyByValue;
