//Date: 20/05/24

// Question: "Number Range Generator"

// Task:
// Write a recursive function called numberRangeRecursive that generates an array containing consecutive numbers from a to b (inclusive).

const a = 5;
const b = 10;

const numberRangeRecursive = (a, b) => {
  if (a > b) {
    return [];
  } else {
    const arr = numberRangeRecursive(a + 1, b);
    arr.unshift(a);
    return arr;
  }
};

const result = numberRangeRecursive(a, b);
console.log(result);
