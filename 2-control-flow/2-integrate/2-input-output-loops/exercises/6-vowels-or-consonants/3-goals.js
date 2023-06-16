'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
let isValidat = false;
while (!isValidat) {
  userInput = prompt('enter a word to filter:');

  /* -- BEGIN: validate input -- */
  if (userInput === null || userInput === '') {
    alert('not empty string, try again');
    continue;
  }

  const whiteSpace = new RegExp('\\s', 'g');
  if (whiteSpace.test(userInput)) {
    alert('not empty space, try again');
  } else {
    isValidat = confirm(
      `Are you sure that your choice -> ${userInput} <- is the right one? `,
    );
    continue;
  }

  /* -- END: validate input -- */
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

let toRemove = '';
if (removeVowels) {
  toRemove = 'AEIOU';
} else {
  toRemove = 'BCDFGHJKLMNPQRSTVWXYZ';
}

let filteredInput = '';
/* -- BEGIN: filter input -- */
for (const char of userInput) {
  if (toRemove.includes(char.toUpperCase())) {
    filteredInput += char;
  } else {
    continue;
  }
}
/* -- END: filter input -- */

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
