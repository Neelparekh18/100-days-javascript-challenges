//Date: 11/05/24

// Question: "Calculate Mean"

// Task:
// Write a function called calculateMean that takes an array of numbers as an input and returns the mean (average) of those numbers.

// The means is a the average of a set of numbers, or the numeric value that represents the center of a collection of numbers.

const arr = [1,2,3,4,5];


const calculateMean = (arr)=>{
    const len = arr.length;
    const meanIndex = Math.floor(len/2)
    return arr[meanIndex]
}
const result = calculateMean(arr);
console.log(result)