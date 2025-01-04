// return a random string of: rock, paper, or scissors

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
const options = ["rock", "paper", "scissors"]; //Create the array of possible options
const randomZeroToThree = Math.floor(Math.random()*3); // create a random number between 0 and 3
console.log(options[randomZeroToThree]); // log the result to the console
return options[randomZeroToThree]; // use the random number to access one of the 3 elements in the array, and return the result
}


function getHumanChoice() {
let humanChoice = prompt("enter an option i.e. rock, paper, or scissors"); //get the value from the user
humanChoice = humanChoice.toLowerCase(); // convert user entry to lower case
humanChoice = humanChoice.trim(); // remove any surrounding spaces entered accidently e.g. by Copy/Paste etc.

    if (humanChoice == "rock" || humanChoice ==  "paper" || humanChoice ==  "scissors") { // check that the entry is one of the 3 valid options
        console.log(`Thank you, you have entered ${humanChoice}`); // show the user that their entry was recorded
        return humanChoice;
            } else {
            console.log("Not a valid entry, please try again"); // let the user know that their entry was not valid
        }
};



getComputerChoice();

getHumanChoice();
