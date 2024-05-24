//Date: 17/05/24

// Question: "Repeat a String"

// Task:
// Write a function called repeatString that takes two parameters. The first parameter is a string, and the second parameter is a number. The function should repeat the input string the specified number of times.

const str = "neel";
const num = 5;

const repeatString = (str, num) => {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr.length > 0 ? newStr : str
};
const result = repeatString(str, num);
console.log(result);
