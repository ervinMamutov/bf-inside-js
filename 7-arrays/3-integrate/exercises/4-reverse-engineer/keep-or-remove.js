'use strict';

let userInput = null;
let isCancel = false;
const userStringArray = [];
const userResultArray = [];

alert('enter as many inputs as you want\n\nWhen you\'re done entering strings press "cancel"');

while (!isCancel) {
  userInput = prompt('enter the next phrase or press "cancel"');
  if (userInput === null) continue;

  userStringArray.push(userInput);

  if (userInput === '') {
    isCancel = true;
    continue;
  }
}

for (const char of userStringArray) {
  const message = `do you want to keep ${char}?`;
  // const confirmKeep = confirm(message);
  if (char && confirm(message)) {
    userResultArray.push(char);
  };
}

alert(userResultArray);
