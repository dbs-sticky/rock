// return a random string of: rock, paper, or scissors

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
const options = ["rock", "paper", "scissors"]; //Create the array of possible options
const randomZeroToThree = Math.floor(Math.random()*3); // create a random number between 0 and 3
const computerChoose = options[randomZeroToThree];

console.log(`The computer selected: ${computerChoose}`); // log the result to the console
return computerChoose; // use the random number to access one of the 3 elements in the array, and return the result
}


function getHumanChoice() {
let humanInput = prompt("enter an option i.e. rock, paper, or scissors"); //get the value from the user
humanInput = humanInput.toLowerCase(); // convert user entry to lower case, so case becomes irrelevant
humanInput = humanInput.trim(); // remove any surrounding spaces entered accidently e.g. by Copy/Paste etc.

    if (humanInput == "rock" || humanInput ==  "paper" || humanInput ==  "scissors") { // check that the entry is one of the 3 valid options
        console.log(`You selected: ${humanInput}`); // show the user that their entry was recorded
        return humanInput;
            } else {
            console.log("Not a valid entry, please try again"); // let the user know that their entry was not valid
        }
};


function playRound(humanChoice, computerChoice) {

};

const humanSelection = getHumanChoice(); // set human choice to a new variable
const computerSelection = getComputerChoice(); //set computer choice to a new variable

playRound(humanSelection, computerSelection); // pass new variables into main function

if (humanSelection === computerSelection) {
    console.log("It was a draw");
} else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "rock")
) {
    humanScore++;
    console.log("You win this round!");
} else if (
    (computerSelection === "rock" && humanSelection === "scissors") ||
    (computerSelection === "scissors" && humanSelection === "paper") ||
    (computerSelection === "paper" && humanSelection === "rock")
) {
    computerScore++;
    console.log("Computer wins this round!");
} else {
    console.log("Error");
}

console.log(`Computer Score: ${computerScore} . Player Score: ${humanScore}`) 