'use strict';

let userInput = '';
let unicodeShift = NaN;

let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:',
  );

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
  } else {
    while (true) {
      const unicodeShiftInput = prompt(
        'how many unicode numbers do you want the characters to shift?',
      );

      if (unicodeShiftInput === null || unicodeShiftInput === '') {
        alert('enter something');
      } else {
        unicodeShift = Number(unicodeShiftInput);

        if (Number.isNaN(unicodeShift)) {
          alert('"' + unicodeShiftInput + '" is not a number');
        } else {
          break;
        }
      }
    }
    /* -- BEGIN: ask the user to confirm their string and shift number -- */
    userConfirmed = confirm(`${userInput} & ${unicodeShift} correct input?`);
    /* -- END -- */
  }
}

let encodedString = '';

/* -- BEGIN: create the encoded string -- */
for (const char of userInput) {
  const charCode = char.charCodeAt();
  const newCode = charCode + unicodeShift;
  const newChar = String.fromCharCode(newCode);
  encodedString += newChar;
}
/* -- END -- */

const finalMessage = `"${userInput}" -> "${encodedString}"`;
alert(finalMessage);
