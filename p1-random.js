/*
    CIT 281 Project 1 (random js)
    Name: Meagan Kiefer
*/

let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let stringLength = getRandomInteger(5, 26); // uses 5 bc min is inclusive, uses 26 bc max is exclusive
let randomString = ""; //initializes and empty string

for (let i=0; i < stringLength; i++) { 
    let integer = getRandomInteger(0, 26); //uses 26 bc max is exclusive
    let letter = alphaLower[integer]; // takes the random number generated above and set the letter equal to that letter found in the array
    randomString += letter; //adds the random letter to the string
}

console.log(randomString);
