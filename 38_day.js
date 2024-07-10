//Date: 28/05/24

// Question: "Number of days between two dates"

// Task:
// Write a function called calculateDaysBetweenDates that calculates the number of days between two given dates. The dates will be provided in the format "YYYY-MM-DD".

const date1 = "2024-01-01";
const date2 = "2024-01-31";

function calculateDaysBetweenDates(d1, d2) {
  const date1 = new Date(d1).getDate();
  const date2 = new Date(d2).getDate();
  return date2 - date1;
}
console.log(calculateDaysBetweenDates(date1, date2));
