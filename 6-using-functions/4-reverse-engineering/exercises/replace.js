'use strict';

import { replaceCharacter } from "./utils/replace-character.js";

alert (
  'first you will enter some text, then decide what to replace. \n - enter the old thing to replace \n - and the new thing to replace it.'
);

let userInput = null;
let initialCharacter = '';
let replaceChar = '';
let result = '';

while (!userInput) {
  userInput = prompt ('enter the original text to modify');

  if (userInput === null || userInput === '') continue;

  while (!initialCharacter) {
    initialCharacter = prompt('enter the text to replace');

    if (initialCharacter === '') continue;
  };

  while (!replaceChar) {
    replaceChar = prompt ('enter the replacement text');

    if (replaceChar === '') continue;

  }

  result = replaceCharacter(userInput, initialCharacter, replaceChar);
  
}

alert (`before : ${userInput} \n after : ${result}`);
