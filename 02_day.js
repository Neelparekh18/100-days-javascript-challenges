//Date: 23/04/24

// Question: Hash Tag Generator   

// Task:
// You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follow.

// The input string should be converted to a hash tag format, where each word is capitalized and concateneted together without spaces.

const str = "my name is neel parekh"
// op : #MyNameIsNeelParekh

const generateHash = (str)=>{
    if(str.length > 200 || str.trim().length === 0){
        return false;   //as per question requirement
    }
    let ans = ["#"]
    let arr = str.split(" ");
    for(let i=0;i<arr.length;i++){
        ans.push(arr[i][0].toUpperCase()+arr[i].slice(1))
    }
    let result = ans.join("");
    console.log(result);
}

generateHash(str);