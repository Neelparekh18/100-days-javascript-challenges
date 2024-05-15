//Date: 14/05/24

// Question: "Find Mode"

// Task:
// Write a function called findMode that takes an array of numbers as an input and returns the mode of the array (the number that appears most frequently)

const arr = [1, 2, 2, 3, 1, 4, 2];

const findMode = (arr) => {
  const frequencyObj = {};

  for (x of arr) {
    if (frequencyObj[x]) {
      frequencyObj[x]++;
    } else {
      frequencyObj[x] = 1;
    }
  }

  let maxKey = null;
  let maxValue = 0;
  for (x in frequencyObj) {
    if (frequencyObj[x] > maxValue) {
      maxValue = frequencyObj[x];
      maxKey = x;
    }
  }
  return (mode = maxKey);
};
const result = findMode(arr);
console.log(result);
