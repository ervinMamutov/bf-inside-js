'use strict';

/**
 * search: finds all strings in an array that include the search query
 * @param {string} [arr=[]] origin array
 * @param {string} [searchQuery=''] search query
 * @returns {string} returns finds string in array
 */
export const search = (arr = [], searchQuery = '') => {
  const newArr = [...arr];
  return newArr.filter((char) => char.includes(searchQuery));
};
