//Date: 10/05/24

// Question: "String Revarsal without using inbuilt method"

// Task:
// Write a function to reverse a string without using in-built methods or libraries. The function should take a string as an input and return the reversed string.

const str = "Neel";

const reverseStr = (str) => {
  const arr = [];
  const strToArr = str.split("");

  for (let i = strToArr.length - 1; i >= 0; i--) {
    arr.push(strToArr[i]);
  }
  return arr.join("");
};
const result = reverseStr(str);
console.log(result);
