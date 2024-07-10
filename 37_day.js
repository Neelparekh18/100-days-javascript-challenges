//Date: 27/05/24

// Question: "Simple Interest Calculator"

// Task:
// Write a function called calculateSimpleInterest that calculates the simple interest given the principal amount, rate of interest per annum, and time in years.


// formula => SI(simple interest) = PRT/100

function calculateSimpleInterest(amount,interest,years){
    return amount* interest * years / 100
}
console.log(calculateSimpleInterest(1000,5,3))