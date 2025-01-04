// return a random string of: rock, paper, or scissors

function getComputerChoice() {
const options = ["rock", "paper", "scissors"]; //Create the array of possible options
const randomZeroToThree = Math.floor(Math.random()*3); // create a random number between 0 and 3
console.log(options[randomZeroToThree]); // use the random number to access one of the 3 elements in the array
return options[randomZeroToThree]; // log the result to the console
}

getComputerChoice();