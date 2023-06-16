'use strict';

const instructions = `Two-Player Remembery

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    if you get one wrong - game over!
`;
alert(instructions);

let numberOfPhrase = 0;
while (!numberOfPhrase) {
  numberOfPhrase = Number(
    prompt('How many phrase are you gonna say, my friend?'),
  );
  if (typeof numberOfPhrase === String)
    alert('"How many?" That\'s a number, but nor a word.');
  console.log(numberOfPhrase);
}
const inputPhrase = 'Player 1, enter your phrase N: ';

function inputPrompt(text, number) {
  let input = [];
  let message = null;
  for (let i = 0; i < number; i++) {
    while (!message) {
      message = prompt(text + i);
    }
    input.push(input[i]);
    console.log(input[i]);
  }
  console.log(input);
  return input;
}


const secrectPhrase = inputPrompt(inputPhrase, numberOfPhrase);
