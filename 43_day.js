//Date: 02/06/24

// Question: "FizzBuzz Challange"
// Task:
// Write a function called fizzBuzz that accepts two numbers, startNum and endNum as an input. The function should return an array containing numbers and specific strings based on the following rules:

//? For each number i in the range from startNum to endNum (both inclusive):
//? If i is divisible by both 3 and 5, include "FizzBuzz" in the result.
//? If i is divisible by 3, include "Fizz" in the result.
//? If i is divisible by 5, include "Buzz" in the result.
//? Otherwise, include the number i itself.

// const startNum = 1;
// const endNum = 15;
const startNum = 12;
const endNum = 20;

function fizzBuzz(s,e){
    const ans = [];
    for(let i=s;i<=e;i++){
        if(i%3 == 0 && i%5 == 0){
            ans.push("FizzBuzz")
        }else if(i%3 == 0){
            ans.push("Fizz")
        }else if(i%5 ==0){
            ans.push("Buzz")
        }else{
            ans.push(i)
        }
    }
    return ans
}
console.log(fizzBuzz(startNum,endNum))

