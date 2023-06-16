'use strict';

const message = 'Input your name';
let inputName = '';
let isName = false;

while (!isName) {
  inputName = prompt(message);
  if (inputName === null || inputName === '') {
    alert('Input correct name');
    continue;
  }

  const correctName = `${inputName} : this is correct name`;
  let isCorrect = confirm(correctName);

  if (isCorrect) {
    isName = true;
  }
}

alert(`Hello ${inputName}`);
