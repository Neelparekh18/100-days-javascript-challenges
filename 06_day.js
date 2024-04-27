//Date: 27/04/24

// Question: check palindrome

// Task:
// Write a function called isPalindrome to determine whether a given string is a palindrome or not, A palindrome is a word, pharse, number, or other sequence of character that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

const str = "race car";
const str2 = "raceCaR";
const str3 = "neel";
const isPalindrome = (string) => {
  const str = string.replace(/\W/g, "");
  //   replacing non-word or spacing with a empty string (\W = non word and  \w = any word)
  let oneStr = "";
  let secondStr = "";

  oneStr = str;

  for (i = str.length - 1; i >= 0; i--) {
    secondStr += str[i];
  }

  if (oneStr.toLowerCase() === secondStr.toLowerCase())
    return `${str} is a palindrome`;
  else return `${str} is not a palindrome`;
};
console.log(isPalindrome(str));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
