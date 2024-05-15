//Date: 12/05/24

// Question: "Find Median"

// Task:
// Write a function called findMedian that takes an array of numbers as an input and returns the median value. If the array has even number of elements, returns the average of the two middle values.

const arr = [5, 3, 9, 1, 7, 10];

const findMedian = (arr) => {
  arr.sort((a, b) => a - b);
  const midIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 == 0) {
    return (arr[midIndex] + arr[midIndex - 1]) / 2;
  } else {
    return arr[midIndex];
  }
};
const result = findMedian(arr);
console.log(result);
