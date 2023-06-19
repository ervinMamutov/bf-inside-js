'use strict';

/* look out for:

  - variable declarations
  - missing condition in while loop
  - off-by-one in for loop
  - missing string concatenation

*/

let userInput = '';
let repetitions = NaN;
while (!userInput) {
  userInput = prompt('enter a phrase to repeat:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const repetitionsInput = prompt('how many times do you want to repeat it?');

  repetitions = Number(repetitionsInput);

  if (isNaN(repetitions)) {
    alert(`${repetitionsInput} is not a number`);
    continue;
  }

  const confirmMessage = confirm(
    `is this correct?\n\n' ${userInput} \n - ${repetitions}`,
  );

  if (confirmMessage) {
    break;
  } else {
    userInput = '';
    continue;
  }
}

let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}

alert(`${userInput} -> ${repeatedInput}`);
