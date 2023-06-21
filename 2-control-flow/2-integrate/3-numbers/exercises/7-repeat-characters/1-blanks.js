'use strict';

let stringToRepeatify = '';
let repetitions = NaN;
let isString = false;
while (!isString) {
  /* gather a string from the user */
  stringToRepeatify = prompt(
    'enter a phrase, each character will be repeated:',
  );
  console.log(
    'stringToRepeatify:',
    typeof stringToRepeatify,
    stringToRepeatify,
  );

  /* make sure the user input something */
  if (stringToRepeatify === '' || stringToRepeatify === null) {
    alert('nope, enter something');
  } else {
    /* ask the user for a number */
    let inputIsNumber = false;
    while (!inputIsNumber) {
      const repetitionsInput = prompt(
        'how many times do you want to repeat each character?',
      );

      /* make sure the user input something */
      if (repetitionsInput === null || repetitionsInput === '') {
        alert('enter something');
      } else {
        /* convert their string to a number */
        repetitions = Number(repetitionsInput);

        /* make sure the user input a valid number */
        if ((Number.isNaN(repetitions))) {
          alert('"' + repetitionsInput + '" is not a number');
          continue;
        } else {
          inputIsNumber = true;
        }
      }
    }

    /* ask the user to confirm their input */
    const confirmMessage =
      'is this correct?\n\n' +
      '- "' +
      stringToRepeatify +
      '"\n' +
      '- ' +
      repetitions;
    const confirmation = confirm(confirmMessage);
    if (confirmation) {
      break;
    }
  }
}

let withRepeatedCharacters = '';

/* iterate through each character in the user input */
for (const character of stringToRepeatify) {
  /* append each character multiple times to the new string */
  for (let i = 0; i < repetitions; i++) {
    withRepeatedCharacters += character;
  }
}

const finalMessage = `"${stringToRepeatify}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
