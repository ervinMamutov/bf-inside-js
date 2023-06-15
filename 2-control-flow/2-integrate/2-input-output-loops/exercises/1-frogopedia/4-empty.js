'use strict';

alert(`Remembers, the game of remembering.

You will be prompted to enter
as many phrases, as you want.
next you will be prompted to remember one of them

if you enter it exactly, you win!`);

const inputPrompt = (num, message) => {
  let text = null;
  while (text === null || text === '') {
    text = prompt(message + num);
  }
  return text;
};

const messageInput = 'enter your secret phrase number ';
let isRepeat = true;
let resultWin = 0;
let resultLost = 0;

while (isRepeat) {
  const input = [];

  let numberOfPrompt = 0;
  numberOfPrompt = Number(prompt('How many phrase will you remember?'));
  for (let i = 0; i < numberOfPrompt; i++) {
    input.push(inputPrompt(i + 1, messageInput));
  }

  const randomNumber = (number) => {
    return Math.floor(Math.random() * number);
  };

  const numberOfGuess = randomNumber(numberOfPrompt);

  const messageGuess = 'enter you choice of phrase number ';

  const guessInput = inputPrompt(numberOfGuess + 1, messageGuess);

  const isGuessInput = guessInput === input[numberOfGuess];
  let resultMessage = '';

  if (isGuessInput) {
    resultMessage = 'You WIN. Congratulations!!!';
    resultWin += 1;
  } else {
    resultMessage = ' Cry, my friend. You LOST.';
    resultLost += 1;
  }

  alert(resultMessage);

  isRepeat = confirm('Play again?');
}

alert(`GAME OVER \n
     Your result: You Win ${resultWin} \n
     You Lost ${resultLost}`);
