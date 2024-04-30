//Date: 28/04/24

// Question: Finding maximum number in an array

// Task:
// Write a function called findMax that takes an array of numbers as input and returns the maximum number in the array.

const arr = [1, 5, 3, 9, 2, -11];

((arr) => {
  const result = arr.reduce((acc, currVal, currIndex) => {
    if (acc < currVal) acc = currVal;
    return acc;
  }, arr[0]);
  console.log(result);
})(arr);

// note : ()() is a IIFE (immediately-invoked function expression)
