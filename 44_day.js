//Date: 03/06/24

// Question: "Password Validation"
// Task:
// Write a function called validatePassword that checks if a given password string meets the following crieteria:

//? Minimum Length: The password must be at least 8 characters long.
//? Case Requirements: The password must includes at least one upperCase letter and at least one lowerCase letter.
//? Numerical Requirements: The password must contains at least one digit.
//? Special Character Requirement: The password must contains at least one special character from the set !@#$%^&*()-_+=.

//* Requirements

//? The functions should return true if the password meets all the above criteria, and false otherwise.

const passRefex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,}$/;
// const password = "Pass123!";
// const password = "password"
// const password = "12345678"
const password = "P@ssw0rd";

function validatePassword(pass) {
  if (passRefex.test(pass)) return true;
  else return false;
}
console.log(validatePassword(password));
