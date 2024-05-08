//Date: 06/05/24

// Question: Find the minimum value in an array

// Task:
// Write a function called findMin that takes an array of numbers as input and returns the minimum value found in the array.

const arr = [5, 10, 2, 8, -8];

const findMin = (arr) => {
  // 1st Approach
  if(arr.length > 0 ){
      return Math.min(...arr);
  }

  // -------------------------
  // 2nd Approach
//   if (arr.length > 0) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < min) min = arr[i];
//     }
//     return min
//   }
};
const result = findMin(arr);
console.log(result);
