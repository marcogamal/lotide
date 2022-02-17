function middle(arr) {
  if (arr.length < 3) {
    return []; // return empty array for array with 1 or 2 element
  } else {
    let removeBeginning = arr.splice(0, arr.length / 2 + 1); 
    let removeEnding = removeBeginning.splice(0, arr.length);
    return removeBeginning; // return 1 element if odd, and 2 elements if even
  }
}

module.exports = middle