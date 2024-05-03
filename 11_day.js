//Date: 02/05/24

// Question: Sum of Digits Calculation

// Task:
// Write a function called sumOfDigits that takes a number as input and returns the sum of its digits.

const number = 1234; // sum = 10

const sumOfDigits = (num) => {
  const conToStr = num.toString();

  let sum = 0;
  for (let i = 0; i < conToStr.length; i++) {
    sum += Number(conToStr[i]);
  }
  return sum;
};
const result = sumOfDigits(number);
console.log(result);
