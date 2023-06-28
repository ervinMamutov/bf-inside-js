/**
 * checks the string length of the array and returns true or false depending on the number of long strings
 * @param {string} [string=[]] origin array
 * @param {number} [long=5] the number of long strings
 * @returns {boolean} return true or false depending on the number of long string  
 */
export const someLong = (strings = [], long = 5) => {
  let someAreLong = false;
  for (const string of strings) {
    if (string.length >= long) {
      someAreLong = true;
      break;
    }
  }
  return someAreLong;
};
