//Date: 30/05/24

// Question: "Simple Bar Chart From Array Data"
// Task:
// Write a function called generateBarChart that takes an array of numbers and generates a simple text-based bar chart.

const arr = [5, 3, 9, 2];
function generateBarChart(arr) {
  for (let i = 0; i < arr.length; i++) {
    document.write(`${i + 1}:`);

    for (j = 0; j < arr[i]; j++) {
      document.write(`*`);
    }
    document.write("</br>");
  }
}
console.log(generateBarChart(arr));
