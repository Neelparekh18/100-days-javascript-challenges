//Date: 21/05/24

// Question: "Password Validator"

// Task:
// Write a function called simplePasswordValidator that btakes a single parameter. The password must contain at least one lowercase letter, one uppercase letter, and at least one digit. The length of the password must be at least 8 characters. The function should return true if the password meets all crieteria, otherwise it should return false.

let password1 = "NeelParekh0711";
let password2 = "neel0711";
let password2 = "neel0711";
function simplePasswordValidator(pass) {
  let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (passRegex.test(pass)) return true;
  else return false;
}
const result1 = simplePasswordValidator(password1);
const result2 = simplePasswordValidator(password2);
console.log(result1);
console.log(result2);
