'use strict';

let messages = null;
let isForg = false;
while (!isForg) {
  messages = prompt('Enter some information about frog');
  if (messages === null || messages === '') {
    alert ('don\'t input cansel or empty space');
    continue;
  }
  if (messages.toLowerCase() !== 'frog') {
    alert ('about frog');
  } else {
    isForg = true;
  }
}

alert ('Perfect!!! The frog is what it takes.');
