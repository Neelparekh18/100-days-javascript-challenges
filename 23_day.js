//Date: 12/05/24

// Question: "Count Occurrences in Array: Element Frequency Tally"

// Task:
// Write a function to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

const numbers = [1, 2, 2, 3, 1, 4, 2];

const countElementOccurrences = (arr) => {
  const frequencyObj = {};

  for (x of arr) {
    if (frequencyObj[x]) {
      frequencyObj[x]++;
    } else {
      frequencyObj[x] = 1;
    }
  }
  return frequencyObj;
};
const result = countElementOccurrences(numbers);
console.log(result);
