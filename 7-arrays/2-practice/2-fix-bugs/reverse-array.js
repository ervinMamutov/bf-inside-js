// #todo

/**
 * reverseArray: reverses an array of anything
 * @param {string} [arr=[]] origin array
 * @returns {string} reversed array
 */
export const reverseArray = (arr = []) => {
  const backwards = [...arr];
  return backwards.reverse();
};
