'use strict';

let repetitions = NaN;
let confirmChoice = false;
let userInput = '';

while (!confirmChoice) {
  userInput = prompt('input your phrase');

  if (userInput === '' || userInput === null) {
    alert('try again');
    continue;
  }

  let isNumber = false;
  while (!isNumber) {
    const userRepiatNumber = prompt('input number of repetitions');

    if(userRepiatNumber === null || userRepiatNumber === '') {
      alert('try again');
      continue;
    }

    repetitions = Number(userRepiatNumber);

    if (Number.isNaN(repetitions)) {
      alert(`${repetitions} is not a number, try again`);
      continue;
    } else {
      isNumber = true;
    }
  }
  confirmChoice = confirm(`${userInput} * ${repetitions} -> are you sure?`);
}

let resultRepetition = '';

for (const char of userInput) {
  for (let i = 0; i < repetitions; i++) {
    resultRepetition += char;
  }
}

alert(`${userInput} * ${repetitions} -> ${resultRepetition}`);
