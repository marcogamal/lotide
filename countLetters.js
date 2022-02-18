// have to loop
// result is an object
// space not counted therefore deleted
// count each letter
function countLetters(str) {
  let count = {};
  const trimmedStr = str.split(' ').join('')
  for (let i = 0; i < trimmedStr.length; i++) {
      let lowerStr = trimmedStr[i].toLowerCase();
      if (count[lowerStr] > 0) {
          count[lowerStr]++;
      } 
      else {
          count[lowerStr] = 1;
      }
  }
  return count;
}

module.exports = countLetters
