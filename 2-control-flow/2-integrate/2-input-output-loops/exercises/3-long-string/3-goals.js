'use strict';

let userInput = '';
while (userInput === '') {
  /* -- BEGIN: validate input -- */
  userInput = prompt('input user name');
  if (userInput === null || userInput === '') {
    alert('input correct user name');
    continue;
  }

  let isName = confirm(`${userInput} - this is correct name`);

  if (isName) {
    break;
  } else {
    alert('input correct name');
    userInput = '';
    continue;
  }
  /* -- END: validate input -- */
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
