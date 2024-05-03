//Date: 01/05/24

// Question: Checking Array Equality

// Task:
// Write a function called arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e., contain the same elements in the same order), and false otherwise.

// case-1
const arr1 = [1,2,3]
const arr2 = [1,2,3]

// case-2
// const arr1 = [1,2,3]
// const arr2 = [1,2,1]

// case-3
// const arr1 = [1,2,3]
// const arr2 = [2,1]




const arraysAreEqual = (arr1,arr2)=>{
    const len1 = arr1.length;
    const len2 = arr2.length;

    if(len1!=len2) return false;

    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!=arr2[i]) return false
    }
    return true;
}

const result = arraysAreEqual(arr1,arr2) ;
console.log(result);