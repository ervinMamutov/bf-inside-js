/**
 * reverseArray: reverses an array of anything
 * @param {any} [arr=[]] origin array
 * @returns {any} reverse array
 */
export const reverseArray = (arr = []) => {
  const newArr = [...arr];
  return newArr.reverse();
};
