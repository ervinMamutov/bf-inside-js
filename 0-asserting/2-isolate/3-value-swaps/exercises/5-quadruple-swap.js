'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'w';
let c = 'z';
let d = 'x';
let temp;

// --- swap values ---

// --- test final values ---

temp = a;
a = b;
console.assert(a === 'w', 'Test 1');
b = d;
console.assert(b === 'x', 'Test 2');
b = c;
c = temp;
console.assert(c === 'y', 'Test 3');
d = b;
console.assert(d === 'z', 'Test 4');

console.assert(temp === 'y', 'Test 5');

console.log('-- end --');
