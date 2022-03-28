"use strict";

let num = 266219;
const array = Array.from(String(num));
let item = 1;

for (let i = 0; i < array.length; i++) {
  item = item * array[i];
}
console.log(item);

let expo = item ** 3;
let expoArr = Array.from(String(expo));

console.log(expoArr[0], expoArr[1]);