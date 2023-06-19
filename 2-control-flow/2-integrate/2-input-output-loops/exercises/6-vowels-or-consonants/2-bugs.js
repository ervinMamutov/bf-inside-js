'use strict';

/* look out for:

  - loop check logic
  - variable declarations
  - assignment vs. comparison
  - wrong interaction functions
  - off-by-one in for loop

*/
let userInput = '';
let userConfirmed = false;

while (!userConfirmed) {
  userInput = prompt('enter a word to filter:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  // regular expression, this works!
  const whiteSpaceRegex = new RegExp('\\s', 'g');
  if (whiteSpaceRegex.test(userInput) === true) {
    alert("words can't have white space");
  } else {
    const confirmMessage =
      'do you want to filter this word?\n\n' + '- "' + userInput + '"';
    userConfirmed = confirm(confirmMessage);
  }
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

const toRemove = removeVowels ? 'aeiou' : 'bcdfghjklmnpqrstvwxyz';

let filteredInput = '';
for (const char of userInput) {
  const lowerCaseCharacter = char.toLowerCase();
  if (toRemove.includes(lowerCaseCharacter)) {
    filteredInput += char;
  }
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
