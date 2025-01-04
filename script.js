
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
const options = ["rock", "paper", "scissors"]; //Create the array of possible options
const randomZeroToThree = Math.floor(Math.random()*3); // create a random number between 0 and 3
const computerChoose = options[randomZeroToThree];

console.log(`The computer selected: ${computerChoose}`); // log the result to the console
return computerChoose; // use the random number to access one of the 3 elements in the array, and return the result
};


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


function playRound(humanSelect, computerSelect) {
    if (humanSelect === computerSelect) {
        console.log("It was a draw");
    } else if (
        (humanSelect === "rock" && computerSelectn === "scissors") ||
        (humanSelect === "scissors" && computerSelect === "paper") ||
        (humanSelect === "paper" && computerSelect === "rock")
    ) {
        humanScore++;
        console.log("You win this round!");
    } else if (
        (computerSelect === "rock" && humanSelect === "scissors") ||
        (computerSelect === "scissors" && humanSelect === "paper") ||
        (computerSelect === "paper" && humanSelect === "rock")
    ) {
        computerScore++;
        console.log("Computer wins this round!");
    } else {
        console.log("Error");
    };
};

const humanSelection = getHumanChoice(); // set human choice to a new variable
const computerSelection = getComputerChoice(); //set computer choice to a new variable

playRound(humanSelection, computerSelection); // pass new variables into main function


console.log(`Computer Score: ${computerScore} . Player Score: ${humanScore}`) 