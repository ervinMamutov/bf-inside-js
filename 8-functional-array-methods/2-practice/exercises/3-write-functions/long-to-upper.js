// #todo

/**
 * longToUpper: makes all long strings in an array upper case
 * @param {string} [arr=''] origin text
 * @param {number} [long=0] number of long
 * @returns {string} Array with characters in uppercase if the length is longer than specified, and in lowercase if the length is shorter then specified.  
 */
export const longToUpper = (arr='', long=0) => {
  const newArr = [...arr];
  const resultArr = [];
  for (const char of newArr) {
    if (char.length >= long) {
      resultArr.push(char.toUpperCase());
    } else {
      resultArr.push(char.toLowerCase())
    }
  }
  return resultArr;
};
