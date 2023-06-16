'use strict';

let userInput = '';
let isValidat = false;

while (!isValidat) {
  userInput = prompt(
    'Enter your word and I will prepare it in the best possible way',
  );

  if (userInput === null || userInput === '') {
    alert("I can't cook anything out of nothing. Tre again.");
    continue;
  }

  const whiteSpace = new RegExp('\\s', 'g');
  if (whiteSpace.test(userInput)) {
    alert("Ingedients don't like empty space. Try again.");
  } else {
    isValidat = confirm('Are you sure? Can I start?');
  }
}

const confirmChoice = confirm(
  'What are we cooking with? \n - ok: vowels\n - cancel: consonants',
);
let filterResult = '';

const selectChar = confirmChoice ? 'aeiou' : 'bcdfghjklmnpqrstvwxyz';

for (const char of userInput) {
  if (selectChar.includes(char.toLowerCase())) {
    filterResult += char;
  } else {
    continue;
  }
}

alert(
  `We used these -> ${userInput} ingredients to make this -> ${filterResult} dish `,
);
