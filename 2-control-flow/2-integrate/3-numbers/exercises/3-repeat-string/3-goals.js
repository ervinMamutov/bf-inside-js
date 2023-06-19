'use strict';

let userInput = '';
let repetitions = NaN;
while (!userInput) {
  /* -- BEGIN: gather input and cast it to a number -- */
  userInput = prompt('input number');

  if (userInput === null || userInput === '') {
    alert('try again');
    continue;
  }
  /* -- END -- */
  const repetitionsInput = prompt('input the number of repetitions');
  repetitions = Number(repetitionsInput);
  if (isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }

  /* -- BEGIN: ask the user to confirm their input -- */
  const confirmUser = confirm(
    `Are you sure that ${userInput} and ${repetitions}`,
  );

  if (confirmUser) {
    break;
  } else {
    userInput = '';
    continue;
  }

  /* -- END -- */
}

/* -- BEGIN: repeat the input -- */
let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}
/* -- END -- */

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
