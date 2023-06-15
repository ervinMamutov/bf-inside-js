'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'z';
let b = 'x';
let c = 'y';
let temp;

// --- swap values ---

// --- test final values ---

temp = a;
a = b;
const test1 = a === 'x';
console.assert(test1, 'Test 1');

b = c;
const test2 = b === 'y';
console.assert(test2, 'Test 2');

c = temp;
const test3 = c === 'z';
console.assert(test3, 'Test 3');

const test4 = temp === 'z';
console.assert(test4, 'Test 4');

console.log('-- end --');
