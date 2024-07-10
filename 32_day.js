//Date: 22/05/24

// Question: "Remove element"

// Task:
// Write a function called removeNthElement. if any element occurs nth time in an array just remove it from the array.

const arr = [1, 2, 1, 3, 4, 2, 5, 2, 4, 6];
const n = 3;

function removeNthElement(arr, n) {
  const freqObj = {};
  for (x of arr) {
    if (freqObj[x]) {
      freqObj[x]++;
    } else {
      freqObj[x] = 1;
    }
    if (freqObj[x] == n) {
      return x;
    }
  }
  return freqObj;
}
console.log(removeNthElement(arr, n));
