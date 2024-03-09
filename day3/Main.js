// let numbers = new Array(1, 2, 3);

// numbers.push(5);

// console.log(numbers);

const Array = require('./Array');

let numbers = new Array(1, 2, 3);

numbers.push(5, 6);
numbers.push(7);

console.log(numbers.toArray());