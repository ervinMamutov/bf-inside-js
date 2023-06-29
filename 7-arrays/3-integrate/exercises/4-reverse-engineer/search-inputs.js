'use strict';

// import { search  } from "./utils/search.js";

/**
* search: finds all strings in an array that include the search query
* @param {string} [arr=[]] origin array
* @param {string} [searchQuery=''] search query
* @returns {string} returns finds string in array
*/

const search = (arr = [], searchQuery = '') => {
  const newArr = [];
  for (const char of arr) {
    // if (char === null) continue;
    if (char && char.includes(searchQuery)) {
      newArr.push(char);
    }
  }
  return newArr;
};

alert('enter as many phrases as your want\n\n then enter s search query (case sensitive)\n-> only phrase that includes the query will be kept');

let userInput = null;
let queryInput = null;
let isConfirm = false;
const arrayCharacter = [];

while (!isConfirm) {
  userInput = prompt('enter some text or click "cancel"');
  if (userInput === '') {
    alert('nothing is not allowed');
    continue;
  }

  arrayCharacter.push(userInput);

  if (userInput === null) {
    isConfirm = true;
  }
}

while (!queryInput) {
  queryInput = prompt('enter a search query');
  if (queryInput === '') {
    continue;
  }
}
const result = search(arrayCharacter, queryInput);
alert(`query ${queryInput}\n\nmatches: ${result}`);
