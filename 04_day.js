//Date: 25/04/24

// Question: check Triangle type

// Task:
// Write a function called checkTriangleType that takes three parameters representing the length  of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", "scalene".

const checkTriangleType = (a, b, c) => {
  if (a + b + c == 180) {
    if (a == b && b == c) return "Equilateral";
    else if (a == b && b !== c) return "Isosceles";
    else return "Scalene";
  } else return "Not a triangle";
};

console.log(checkTriangleType(60, 60, 60));
console.log(checkTriangleType(80, 80, 20));
console.log(checkTriangleType(80, 90, 10));
console.log(checkTriangleType(90, 90, 10));
