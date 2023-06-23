/**
 * this function decides how similar two values are
 * @param {any} a - the first value
 * @param {any} b - the second value
 * @returns {string} how similar are a and b?
 */
export const similarity = (a, b) => {
  let result = '';
  if (Object.is(a, b)) {
    result = 'exactly the same';
  } else if (typeof a === typeof b) {
    result = 'the same type';
  } else {
    result = 'nothing alike';
  }
  return result;
};
