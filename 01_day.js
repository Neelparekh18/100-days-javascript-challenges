// Date: 22/04/24

// Question: Longest word in a String.  

let str = "watch virat kohli batting at chinnaswami stadium";

const findLongestWord = (str) => {
  let longestWord = "";
  let strToArr = str.split(" ");

  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i].length > longestWord.length) {
      longestWord = strToArr[i];
    }
  }
  console.log(longestWord);
  
};
findLongestWord(str);
