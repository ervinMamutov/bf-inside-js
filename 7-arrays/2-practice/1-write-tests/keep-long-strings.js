/**
 * array filtiring by length
 * @param {string} [strings=[]] original array
 * @param {number} [long=5] a specified min length of string
 * @returns {string} the new array consists of a string longer than 5 character
 */

export const keepLongStrings = (strings = [], long = 5) => {
  const longStrings = [];
  for (const string of strings) {
    if (string.length > long) {
      longStrings.push(string);
    }
  }
  return longStrings;
};
