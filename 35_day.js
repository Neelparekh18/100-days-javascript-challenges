//Date: 25/05/24

// Question: "Check Object Emptiness"

// Task:
// Write a function called isEmptyObject that takes an object as an input and determines whether it is empty or not. An empty object is defined as an object with no own properties.

const obj = {};
// const obj = {name:"neel"};

function isEmptyObject(obj) {
  // 1st way to do -------------------------
  //   for (let x in obj) {
  //     if(obj.hasOwnProperty(x)){
  //         return `it's not an empty object`
  //     }
  //   }
  //   return `it's an empty object`

  // 2nd way to do -------------------------
  return Object.keys(obj).length == 0
    ? `it's an empty object`
    : `it's not an empty object`;
}
console.log(isEmptyObject(obj));
