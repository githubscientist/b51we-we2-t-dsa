/*
    Arrays are a data structure that can hold more than one value at a time.

    - the values are stored in sequential order / contiguous memory locations
    - the values are indexed starting from 0
    - the values can be accessed using the index since arrays are mutables.
    - the values can be updated using the index
*/

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);

// console.log(numbers[0]);

// console.log(numbers[4]);

// numbers[0] = 10;

// console.log(numbers);

let numbers = [1, 2, 3, 4, 5];

// to push a value to the end of the array

numbers.push(6);

// console.log(numbers.push(7, 8, 9, 10));

numbers.push(7, 8, 9, 10);

// to push a value to the beginning of the array
numbers.unshift(0);

numbers.unshift(-1, -2, -3, -4, -5);

// to remove the last value from the array
numbers.pop();
numbers.pop();

// to remove the first value from the array
numbers.shift();

numbers.shift();
numbers.shift();

// to insert or remove a value at a specific index
numbers.splice(2, 0, 12);

numbers.splice(6, 1);

// console.log(numbers);
// console.log(numbers.includes(10));
// console.log(numbers.indexOf(10));

let nums = numbers.slice(5, 10);

// console.log(nums);

// for (let index = 0; index < nums.length; index++){
//     console.log(nums[index]);
// }

// let index = 0
// for (; index < nums.length; ){
//     console.log(nums[index]);
//     index++
// }

// let index = 0;
// while (index < nums.length ){
//     console.log(nums[index]);
//     index++;
// }

// let index = 0;
// do {
//     console.log(nums[index]);
//     index++;
// } while (index < nums.length);

// for (let index in nums){
//     console.log(nums[index]);
// }

// for (let num of nums){
//     console.log(num);
// }

nums.forEach(num => {
    console.log(num);
});