'use strict';

let validInput = '';
let isValid = false;
let index = 0;

while (!isValid) {
  index++;
  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`,
  );
  if (userInput === null || userInput === '') {
    alert('not empty, try again');
    continue;
  }

  if (userInput.length < index) {
    alert('too short, try again');
  }

  if (userInput[index].toLowerCase() === 'e') {
    validInput = userInput;
    isValid = true;
  } else {
    alert(`input has no "e" or "E" as the ${index}th character`);
    continue;
  }
}

alert(`done ${validInput}`);
