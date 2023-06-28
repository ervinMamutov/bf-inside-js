'use strict';

import { repeat } from './utils/repeat.js'
import { removeNotLatter } from './utils/remove-not-latter.js'

let isString = false;
let userInput = '';

while (!isString) {
  userInput = prompt('enter a phrase');

  if (userInput === null) {
    continue;
  }

  const confirmChoice = confirm('"ok" - to remove everything that is not a latter \n "cancel" - to repeat each character');
  let result = '';

  if (confirmChoice) {
    result = removeNotLatter(userInput);
  } else {
    result = repeat(userInput, 2);
  }

  alert(`${result}`);
  
  isString = true;
}
