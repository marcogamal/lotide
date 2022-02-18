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

module.exports = flatten;
