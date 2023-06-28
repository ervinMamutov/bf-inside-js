'use strict';

import { removeDuplicate } from './utils/remove-duplicate.js';

let isString = false;
let userInput = '';

while(!isString) {

  const userInput = prompt('enter something with repeated letters, they will be removed');

  if (userInput === null) {
    continue;
  } else {
    isString = true
  }
  alert (removeDuplicate(userInput));
}
