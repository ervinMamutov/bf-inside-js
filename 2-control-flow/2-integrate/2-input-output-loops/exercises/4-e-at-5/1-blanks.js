'use strict';

let validInput = '';
let isFive = false;
while (!isFive) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');
  console.log('userInput:', typeof userInput, userInput);

  // make sure the user entered something
  if (userInput === null || userInput === '') {
    alert('try again');
    continue;
  }

  // make sure it is long enough to have an "e" in the 5th letter
  if (userInput.length < 5) {
    alert('input 5 or more characters');
    continue;
  }

  // check if the 5th character is an "e" or "E"
  if (userInput[4].toLowerCase() === 'e') {
    validInput = userInput;
    isFive = true;
  } else {
    alert('input has no "e" or "E" as the 5th character');
    continue;
  }
}

alert('done: "' + validInput + '"');
