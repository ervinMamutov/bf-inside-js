'use strict';

let isConfirm = false;
let isNumber = true;
let charShift = NaN;
let userInput = null;
while (!isConfirm) {
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:',
  );

  if (userInput === null && userInput === '') {
    alert('try again');
    continue;
  }

  while (isNumber) {
    const offsetVallue = prompt(
      'how many unicode numbers do you want the characters to shift?',
    );

    if (offsetVallue === null && offsetVallue === '') {
      alert('enter something');
    }

    charShift = Number(offsetVallue);

    if (Number.isNaN(charShift)) {
      alert(`${charShift} is not a number`);
      continue;
    } else {
      break;
    }
  }

  isConfirm = confirm(`${userInput} & ${charShift} is this correct?`);
}

let newPhrase = '';

for (const char of userInput) {
  const charCode = char.charCodeAt();
  const shiftCode = charCode + charShift;
  const newChar = String.fromCharCode(shiftCode);
  newPhrase += newChar;
}

alert(`${userInput} -> ${newPhrase}`);
