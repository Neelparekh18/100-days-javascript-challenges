//Date: 23/05/24

// Question: "Random Hex Color Generator"

// Task:
// Write a function called randomHexColor that generates a random hexadecimal color code each time it is called. The function should return a string representing the random color code in the format '#RRGGBB', where RR, GG, and BB are two-digit hexadecimal numbers representing the red, green and blue components of the color, respectively.



function randomHexColor(){
    let first = Math.floor(Math.random() * 256);  // 0-255
    let second = Math.floor(Math.random() * 256); // 0-255
    let third = Math.floor(Math.random() * 256);  // 0-255

    let RR = first.toString(16).padStart(2, '0');  // Convert to hex and pad if necessary
    let GG = second.toString(16).padStart(2, '0'); // Convert to hex and pad if necessary
    let BB = third.toString(16).padStart(2, '0');  // Convert to hex and pad if necessary

    return `#${RR}${GG}${BB}`;
    
}
console.log(randomHexColor())