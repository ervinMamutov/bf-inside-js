/**
 * keepType: keeps all items of a specific type
 * @param {any} [things=[]] origin array
 * @param {string} [type=''] check type
 * @returns {any} return a new array filtered by the specified type
 */
export const keepType = (things = [], type = '') => {
  return things.filter((thing) => {
    return typeof thing === type;
  });
};
