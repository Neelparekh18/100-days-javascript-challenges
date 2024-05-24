//Date: 18/05/24

// Question: "Truncate a String"

// Task:
// Write a function called truncateString that takes two parameters. The first parameter is a string, and the second parameter is a number. The function should truncate the input string to the specified number of characters.

const str = "A-tisket a-tasket A green and yellow basket";
const num = 8;

const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num);
  }
};
const result = truncateString(str, num);
console.log(result);
