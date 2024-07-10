//Date: 29/05/24

// Question: "Calculate Age from birthdate"

// Task:
// Write a function called calculateAge that takes a birthdate as an input and returns the current age of the person. The birthDate will be provided in the format "YYYY-MM-DD".

const DOB = "2002-11-07";

function calculateAge(dob) {
  const birthDate = new Date(dob);
  const currentDate = new Date();

  let birthYear = birthDate.getFullYear();
  let birthMonth = birthDate.getMonth();
  let bDate = birthDate.getDate();

  let currYear = currentDate.getFullYear();
  let currMonth = currentDate.getMonth();
  let currdate = currentDate.getDate();

  let dateDiff;
  let monthDiff;
  let yearDiff;

  if (currdate < bDate) {
    dateDiff = 30 + (currdate - bDate);
    currMonth--;
  }

  if (currMonth < birthMonth) {
    monthDiff = 12 + (currMonth - birthMonth);
    currYear--;
  }
  yearDiff = currYear - birthYear;
  const age = `my age is ${yearDiff} years, ${monthDiff} months, ${dateDiff} days`;
  return age;
}
console.log(calculateAge(DOB));
