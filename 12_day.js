//Date: 03/05/24

// Question: Removing Duplicate Elements from an Array

// Task:
// Write a function called removeDuplicates that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

const arr = [1, 2, 3, 4, 1, 2, 3, 4];

const removeDuplicates = (arr) => {
  // 1st approch
  //   const newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  //   }
  //   return newArr;
  //   ----------------------------
  // 2nd approach
  // const res = Array.from(new Set(arr));
  // return res
};

const result = removeDuplicates(arr);
console.log(result);
