//Date: 08/05/24

// Question: "Character Case Checker: Uppercase or Lowercase?"

// Task:
// Write a function to check if a character is uppercase or lowercase.

const char = "N";

const characterChecker = (char) => {
  // 1st approach
  //   const convertedToUpperCase = char.toUpperCase();
  //   return char == convertedToUpperCase ? "Uppercase" : "Lowercase";

  // 2nd approach
  const charCode = char.charCodeAt(0);
  if (charCode >= 65 && charCode <= 90) {
    return "Uppercase";
  } else if (charCode >= 97 && charCode <= 122) {
    return "Lowercase";
  } else {
    return "Neither";
  }
};
const result = characterChecker(char);
console.log(result);
