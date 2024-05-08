//Date: 05/05/24

// Question: Calculate the Sum of Squares in an Array

// Task:
// Write a function called sumOfSquares to calculate the sum of squares of all elements in an array. For example, Given the array [1,2,3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1+4+9 = 14.

const arr = [1, 2, 3];

const sumOfSquares = (arr) => {
  // 1st approach
  //   let sum = 0;
  //   for(let i=0;i<arr.length;i++){
  //       sum+= arr[i]**2
  //   }
  //   return sum;

  // ----------------------------
  // 2nd approach    
  const res = arr.reduce((acc, currVal, ind, array) => acc + currVal ** 2, 0);
  return res;
};
const result = sumOfSquares(arr);
console.log(result);
