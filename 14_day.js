//Date: 04/05/24

// Question: Identifying Power of Two

// Task:
// Write a function called isPowerOfTwo that takes an integer num as a input and returns a true if num is a power of two, and false otherwise.

let num = 8; //op:true
// let num = 7; //op: false
const isPowerOfTwo = (num) => {
  let op = false;
  if (num <= 0) return op;

  for (let i = 1; Math.pow(2, i) <= num; i++) {
    if (2 ** i == num) op = true;
  }
  return op;
};
const result = isPowerOfTwo(num);
console.log(result);
