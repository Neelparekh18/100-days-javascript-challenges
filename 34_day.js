//Date: 24/05/24

// Question: "Remove Duplicates"

// Task:
// Write a function called removeDuplicates that takes an array of elements as an input and returns a new array with duplicate elements removed.

const arr = [1, 2, 3, 3, 4, 4, 5];
// const arr = ["a","b","c","b","a"]
function removeDuplicates(arr) {
  // 1st way to perform the task
  //   let ans = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!ans.includes(arr[i])) {
  //       ans.push(arr[i]);
  //     }
  //   }
  //   return ans;

  // -----------------------------------------
  // 2nd way to perform the task

  const newArr = new Set(arr);
  return [...newArr];
}

console.log(removeDuplicates(arr));
