//Date: 26/05/24

// Question: "Convert an Object to an Array and vice versa"

// Task:
//? Convert to Array : Write a function called objectToArray that takes an object as an input and returns an array of key-value pairs, where each element in the array is an array with two elements: the key and the corresponding value from the object.

//? Convert to Object : write a function called arrayToObject that takes an array of key-value pairs (as returned by the objectToarray function) and returns a new object with the keys and values from the array.

const obj = {
  name: "neel",
  age: 21,
  sports: "cricket",
};

function objectToArray(obj) {
  const entries = Object.entries(obj);
  console.log(entries.flat());
  return entries;
}
const result1 = objectToArray(obj);
console.log(result1);

function arrayToObject(arr) {
  return Object.fromEntries(arr);
}
const result2 = arrayToObject(result1);
console.log(result2);
