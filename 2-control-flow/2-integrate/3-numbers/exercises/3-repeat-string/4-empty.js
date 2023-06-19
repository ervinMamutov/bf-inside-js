'use strict';

let userInput = '';
let repetition = NaN;
let isNumber = false;

while (!isNumber) {
  userInput = prompt('input string');
  if (userInput === null || userInput === '') {
    alert('try again');
    continue;
  }

  repetition = Number(prompt('input namber of repetitions'));
  if (isNaN(repetition)) {
    continue;
  }

  const confirmChoise = confirm(
    `Are you sure about your choice:\n phrase : ${userInput},\n number of repetitions : ${repetition} `,
  );
  if (confirmChoise) {
    break;
  } else {
    isNumber = false;
    continue;
  }
}

let repetitionResult = '';

for (let i = 0; i < repetition; i++) {
  repetitionResult += userInput;
}

alert(`input : ${userInput} ->\n result : ${repetitionResult}`);
