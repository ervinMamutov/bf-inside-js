'use strict';

let validInput = '';
let isNotValid = true;
while (isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  /* -- BEGIN: validate input -- */
  if (userInput === null || userInput === '') {
    alert('try again');
    continue;
  }
  if (userInput.length < 5) {
    alert('too short, try again');
    continue;
  }

  if (userInput[4].toLowerCase() === 'e') {
    validInput = userInput;
    isNotValid = false;
  } else {
    alert('not validate, try again');
    continue;
  }
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
