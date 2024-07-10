//Date: 01/06/24

// Question: "Validate a credit card number (luhn algorithm)"
// Task:
// Write a function to validate credit card numbers using the luhn algorithm.
// Write a function named validateCreditCard that takes a credit card number as a string. The function should return true if the number is valid according to the Luhn algorithm,and false otherwise.

let str = "4539 1488 0343 6467";
// let str = "8273 1232 7352 0569";


function validateCreditCard(str) {
  //replace " " with ""
  str = str.replaceAll(" ", ""); 

  //reverse the digits
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  //double every second digit
  const strToArr = reverseStr.split("");
  const newArr = strToArr.map((currVal, index) =>
    index % 2 != 0 ? (currVal *= 2) : Number(currVal)
  );
  //   console.log(newArr)

  //substract 9 from numbers higher than 9
  const arrAfterSub = newArr.map((currVal, index) =>
    currVal > 9 ? (currVal -= 9) : currVal
  );

  //sum all digits
  const sumArr = arrAfterSub.reduce((acc, curr) => acc + curr, 0);

  //Check modulo 10
  return sumArr % 10 == 0 ? "true" : "false";
}

console.log(validateCreditCard(str));
