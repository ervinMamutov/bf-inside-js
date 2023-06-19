'use strict';

const message = 'enter anything longer than 5 characters';
let inputChar = '';
let isChar = false;

while (!isChar) {
  inputChar = prompt(message);
  if (inputChar === null || inputChar === '') {
    alert('that is nothing');
    continue;
  }

  if (inputChar.length > 5) {
    isChar = true;
  } else {
    alert('too short');
    continue;

  }
 
}

alert(`${inputChar} is 6 characters long `);
