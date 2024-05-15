//Date: 07/05/24

// Question: String Transformation: CamelCase Conversion

// Task:
// Write a function to convert a string to camelCase & snake_case.

const str = "my name is neel parekh";
const toCamelCase = (str) => {
  str.trim();
  const strToarr = str.split(" ");

  const res = strToarr.map((currVal, ind) => {
    if (ind == 0) {
      return currVal;
    } else {
      return currVal[0].toUpperCase() + currVal.slice(1);
    }
  });
  return res.join("");
};
const result = toCamelCase(str);
console.log(result);
