/**
 * allLong: checks if all the strings in an array are long
 * @param {string} [strings=[]] origin array
 * @param {number} [long=0] number of long character
 * @return {boolean} true or false depending on character length
 */
export const allLong = (strings = [], long = 0) => {
  if (strings.length === 0) return true;
  const newArr = [...strings];
  for (const character of newArr) {
    if (character.length < long) {
      return false;
    } else {
      return true;
    }
  }
};
