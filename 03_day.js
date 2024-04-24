//Date: 24/04/24


// Question: Count Occurence Of Character

// Task:
// Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.


let str = "nEel";
let char = "e";

const countChar = (str,char)=>{
//    let count = 0;
   let string = str.toLowerCase(); //neel
   let character = char.toLowerCase(); //e


//    for(let i=0;i<string.length;i++){
//     if(string[i] == character){
//         count++;
//     }
// }
// return count;
arr = string.split("");

const result = arr.reduce( (acc,currVal)=> {
    if(currVal === character){
        acc++;
    }
return acc

}, 0)
return result;
}



console.log(countChar(str,char))