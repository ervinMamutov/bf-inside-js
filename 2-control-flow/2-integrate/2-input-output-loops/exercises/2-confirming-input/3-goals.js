'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {
  /* -- BEGIN: validate input -- */
  userInput = prompt('enter your name');
  if (userInput === null || userInput === '') {
    alert('name is not an empty string');
    continue;
  }

  const message = `this ${userInput} correct name?`;
  const confirmName = confirm(message);

  if (confirmName) {
    isValidName = true;
  }
  /* -- END: validate input -- */
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
