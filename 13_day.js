//Date: 03/05/24

// Question: Counting Vowels in a String

// Task:
// Write a function called countVowels that takes a string as input and returns the count of vowels in that string. consider "a","e","i","o" and "u" as vowel (both lowercase and uppercase).

const str = "nEel Parekh";

const countVowels = (str) => {
  // 1st approach
  const vowelArray = new Set(["a", "e", "i", "o", "u"]);
  const string = str.toLowerCase();
  let vowelCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowelArray.has(string[i])) vowelCount++;
  }
  return vowelCount;

  // ----------------------

  // 2nd approach
  //   const string = str.toLowerCase();
  //   const vowelRegex = /[aeiou]/gi;
  //   const matches = string.match(vowelRegex);
  //   return matches ? matches.length : 0;
};
const result = countVowels(str);
console.log(result);
