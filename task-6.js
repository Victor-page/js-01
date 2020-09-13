"use strict";
// let total = 0;
// let input;

// do {
//   input = +prompt("Insert a number", "");
//   total += input;
// } while (input);
// console.log(total);
// alert(`Общая сумма чисел равна ${total}`);

//or

let total = 0;
let input = +prompt("Insert a number", "");

while (input) {
  total += input;
  input = +prompt("Insert a number", "");
}
alert(`Общая сумма чисел равна ${total}`);
