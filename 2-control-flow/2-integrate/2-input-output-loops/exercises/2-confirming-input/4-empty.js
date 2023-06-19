'use strict';

let inputName = null;
let isName = false;

while (!isName) {
  inputName = prompt('Enter your name');

  if (inputName === null || inputName === '') {
    alert('Input your name, please');
    continue;
  }

  const confirmName = `${inputName} this is your name`;
  let isConfirm = confirm(confirmName);

  if (isConfirm) {
    isName = true;
  }
}

alert(`Your name ${inputName}`);
