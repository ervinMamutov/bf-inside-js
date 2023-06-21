'use strict';

/* look out for:

  - unnecessary variable declarations

*/

let userInput = '';
let unicodeShift = NaN;
let isConfirm = false;

while (!isConfirm) {
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:',
  );

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  while (isNaN(unicodeShift)) {
    const unicodeShiftInput = prompt(
      'how many unicode numbers do you want the characters to shift?',
    );

    if (unicodeShiftInput === null || unicodeShiftInput === '') {
      alert('enter something');
    }

    unicodeShift = Number(unicodeShiftInput);

    if (isNaN(unicodeShift)) {
      alert('"' + unicodeShiftInput + '" is not a number');
      continue;
    }

    const confirmMessage =
      'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + unicodeShift;
    isConfirm = confirm(confirmMessage);
  }
}

let encodedString = '';

for (const char of userInput) {
  const characterCode = char.charCodeAt();
  const newCharCode = characterCode + unicodeShift;
  const encodedCharacter = String.fromCharCode(newCharCode);
  encodedString += encodedCharacter;
  console.log(encodedString);
}

const finalMessage = `"${userInput}" -> "${encodedString}"`;

alert(finalMessage);
