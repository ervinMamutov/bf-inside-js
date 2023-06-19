'use strict';

let inputValidation = '';
let isValidate = false;
const message = 'enter anything with "e" or "E" as the 5th letter';
while (!isValidate) {
  const userInput = prompt(message);
  if (userInput === null || userInput === '') {
    alert('not empty, try again');
    continue;
  }

  if (userInput.length < 5) {
    alert('too short, try again');
    continue;
  }

  if (userInput[4].toLowerCase() === 'e') {
    inputValidation = userInput;
    isValidate = true;
  } else {
    alert('not validation, try again');
    continue;
  }
}

alert('done: "' + inputValidation + '"');
