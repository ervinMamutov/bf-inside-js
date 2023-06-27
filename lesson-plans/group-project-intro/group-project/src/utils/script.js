'use strict';

const guessOutput = document.getElementById('guess');
const higherButton = document.getElementById('higher');
const lowerButton = document.getElementById('lower');
const correctButton = document.getElementById('correct');
let lowerRange = 0;
let upperRange = 1000;

// Function to update the guess output

function updateGuessOutput(guess) {
  guessOutput.textContent = `Is your number ${guess} ?`;
}
// Event listener for the Higher button
higherButton.addEventListener('click', () => {
  lowerRange = guess + 1;
  guess = Math.floor((lowerRange + upperRange) / 2);
  updateGuessOutput(guess);
});

// Event listener for the Lower button

lowerButton.addEventListener('click', () => {
  upperRange = guess - 1;
  guess = Math.floor((lowerRange + upperRange) / 2);
  updateGuessOutput(guess);
});

// Event listener for the Correct button

correctButton.addEventListener('click', () => {
  alert('Great! I guessed your number correctly.');
});

// Initial guess
let guess = Math.floor((lowerRange + upperRange) / 2);
updateGuessOutput(guess);
