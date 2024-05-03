//Date: 30/04/24

// Question: Calculate the Average

// Task:
// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.
const arr = [5, 10, 2, 8];

const calculateAverage = (arr) => {
  const length = arr.length;
  const sum = arr.reduce((acc, curr, ind, arr) => acc + curr, 0);
  const avg = sum / length;
  return avg;
};
console.log(calculateAverage(arr));



// By using IIFE (immediately invoked function expression)

// ((arr) => {
//   const length = arr.length;
//   const sum = arr.reduce((acc, curr, ind, arr) => acc + curr, 0);
//   const avg = sum / length;
//   console.log(avg);
// })(arr);
