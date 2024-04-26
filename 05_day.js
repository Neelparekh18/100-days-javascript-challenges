//Date: 26/04/24

// Question: Sort an array

// Task:
// Write a function called sortAscending to sort an array of numbers in an ascending  order.

const arr = [5, 3, 10, 8,55,3,0,398,550,340];
const sortAscending = (arr) => {

// --------------------------- 1st way
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
  }
  return arr


// -----------------------------2nd way
// return arr.sort((a,b)=> a-b)
};
console.log(sortAscending(arr));