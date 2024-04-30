//Date: 29/04/24

// Question: Factorial Finder

// Task:
// Write a function called factorial that takes a non-negative integer number as input and returns its factorial. The factorial of non-negative integer n , denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.

let number = 5;

((num) => {
  if (num == 0) return 1;
  if (num < 0) return false;
  let ans = 1;
  while (num > 0) {
    ans *= num;
    num--;
  }
  console.log(ans);
})(number);


// note: ()() is a IIFE function (Immediately invoke function expression)