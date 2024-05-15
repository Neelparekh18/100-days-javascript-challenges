//Date: 09/05/24

// Question: "Initial Substring Detector: String Start Check"

// Task:
// Write a function to check if a given string starts with a specific substring.

const str = "Hello world";
const subStr = "hello";
const startsWith = (str, substr) => {
  return str.toUpperCase().startsWith(substr.toUpperCase());
};
const result = startsWith(str, subStr);
console.log(result);
