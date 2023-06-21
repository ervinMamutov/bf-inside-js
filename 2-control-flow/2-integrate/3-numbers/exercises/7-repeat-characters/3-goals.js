'use strict';

let toRepeat = '';
let repetitions = NaN;

let notConfirmed = false;
while (!notConfirmed) {
  toRepeat = prompt('enter a phrase, each character will be repeated:');

  if (toRepeat === '' || toRepeat === null) {
    alert('nope, enter something');
  } else {
    /* -- BEGIN: get a number from the user -- */
    let isNumber = false;
    while (!isNumber) {
      const repeatUser = prompt('input the number of repetitions ');
      repetitions = Number(repeatUser);

      if (Number.isNaN(repetitions)) {
        alert('try again');
      } else {
        isNumber = true;
      }
    }
    /* -- END -- */

    const confirmMessage =
      'is this correct?\n\n' + '- "' + toRepeat + '"\n' + '- ' + repetitions;
    notConfirmed = confirm(confirmMessage);
  }
}

let withRepeatedCharacters = '';

/* -- BEGIN: repeat each character in the string -- */
for (const char of toRepeat) {
  for (let i = 0; i < repetitions; i++) {
    withRepeatedCharacters += char;
  }
}
/* -- END -- */

const finalMessage = `"${toRepeat}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
