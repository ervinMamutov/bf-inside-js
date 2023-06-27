'use strict';

let start = 0;
let finish = 1000000;

let middle = 0;
const less = 'less';
const more = 'more';
const win = 'win';
let isNumber = false;
let n = 0;

// middle = Math.floor((start + finish)/2);

console.log(`1 : ${middle}`);

while (!isNumber) {
  middle = Math.floor((start + finish)/2);
  const question = prompt(`${middle} more, less, win?`);

  if (question === 'less') {
    finish = middle;
    middle = Math.floor((start + finish) / 2);
    n++;
    continue;
  } else if (question === 'more') {
    start = middle;
    middle = Math.floor((start + finish) / 2);
    n++;
    continue;
  } else {
    isNumber = true;
  }
}
alert (`attempts ${n}`);
