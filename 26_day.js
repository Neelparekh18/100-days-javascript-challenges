//Date: 16/05/24

// Question: "Calculate the Nth Fibonacci Term"

// Task:
// Write a function to find the nth Fibonacci number.

const n = 5;
const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else {
    // console.log(n)
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
const result = fibonacci(n);
console.log(result);
