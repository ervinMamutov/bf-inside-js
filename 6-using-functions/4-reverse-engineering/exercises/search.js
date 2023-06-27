'use strict';

import { findCharacter } from "./utils/find-character.js";

let userInput = '';
let isSensitive = true;
let findChar = '';
while (!userInput) {
  
  userInput = prompt('enter a phrase to search');
  if (userInput === '' || userInput === null) continue;

  const isConfirm = confirm(`is this correct: ${userInput}`);
  if (!isConfirm) continue;

  isSensitive = confirm('do you want a case-sensitive search?');

  while (!findChar) {
    findChar = prompt('enter a search query, this program will check if it exists in your phrase');
    if(findChar === '' || findChar === null) continue;

    const isConfirm = confirm(`is this correct: ${findChar}`);
    if (!isConfirm) continue;

  }
}

const result = findCharacter(userInput, findChar, isSensitive);

alert(`${userInput} does include ${findChar} -> ${result}\n\n case sensitive -> ${isSensitive}`)
