//Date: 15/05/24

// Question: "Find factorial"

// Task:
// Write a function to calculate the factorial of a number (using recursion).

const number = 5;

const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
const result = factorial(number);
console.log(result);
