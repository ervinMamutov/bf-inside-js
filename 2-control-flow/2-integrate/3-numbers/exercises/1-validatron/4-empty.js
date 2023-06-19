'use strict';

const inputUser = prompt('input number');
let isNumber = false;

if (!isNaN(Number(inputUser))) {
  isNumber = true;
}

const isUserThingNumber = confirm('Are you sure you entered a number?');

const isResult = isNumber === isUserThingNumber;

if (isResult) {
  alert('corect');
} else {
  alert('yoops');
}
