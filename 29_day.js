//Date: 19/05/24

// Question: "Number Range Generator"

// Task:
// Write a function called numberRange that generates an array containing consecutive numbers from a to b (inclusive).



const a = 5;
const b = 10;

const numberRange = (a,b)=>{
    const ans = [];
    for(let i=a;i<=b;i++){
        ans.push(i)
    }
    return ans;
}
const result = numberRange(a,b);
console.log(result)