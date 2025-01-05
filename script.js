
let humanScore = 0; // set starting human score to zero
let computerScore = 0; // set starting computer score to zero

function getComputerChoice() { // get the computer choice
const options = ["rock", "paper", "scissors"]; //Create the array of possible options
const randomZeroToThree = Math.floor(Math.random()*3); // create a random integer between 0 and 3
const computerChoose = options[randomZeroToThree]; // use the integer to pick an value from the array
console.log(`The computer selected: ${computerChoose}`); // log the result to the console
return computerChoose; // return the result i.e. rock, paper, or scissors
}


function getHumanChoice() { // get the human choise
let humanInput = prompt("enter an option i.e. rock, paper, or scissors"); //get the value from the user
humanInput = humanInput.toLowerCase(); // convert user entry to lower case, so case becomes irrelevant
humanInput = humanInput.trim(); // remove any surrounding spaces entered accidently e.g. by Copy/Paste etc.

    if (humanInput == "rock" || humanInput ==  "paper" || humanInput ==  "scissors") { // check that the entry is one of the 3 valid options
        console.log(`You selected: ${humanInput}`); // show the user that their entry was recorded
        return humanInput;
            } else {
            console.log("Not a valid entry, please try again"); // let the user know that their entry was not valid
        }
}


function playRound(humanSelect, computerSelect) { // function to play a single round, include rock, paper, scissors logic
    if (humanSelect === computerSelect) { // the case when it's a draw
        console.log("It was a draw");
    } else if ( // the 3 cases where the human wins
        (humanSelect === "rock" && computerSelect === "scissors") ||
        (humanSelect === "scissors" && computerSelect === "paper") ||
        (humanSelect === "paper" && computerSelect === "rock")
    ) {
        humanScore++; // iterate the human score
        console.log("You win this round!");
    } else if ( // the case where the computer wins
        (computerSelect === "rock" && humanSelect === "scissors") ||
        (computerSelect === "scissors" && humanSelect === "paper") ||
        (computerSelect === "paper" && humanSelect === "rock")
    ) {
        computerScore++; // iterate the computer score
        console.log("Computer wins this round!");
    } else {
        console.log("Error"); // if none of the cases above are met, log "error" to the console
    };
}

function playGame() {

    for (let gameNumber = 1; gameNumber <= 5; gameNumber++){ //iterate the round 5 times
        const humanSelection = getHumanChoice(); //get the human choice
        const computerSelection = getComputerChoice(); // get the computer
        playRound(humanSelection, computerSelection); // play a round
        console.log(`Round: ${gameNumber}. Computer Score: ${computerScore} . Player Score: ${humanScore}`); // log the cumulative score
    } 
    console.log("Game over!"); // let the user know the game has ended
    if (humanScore == computerScore) { // if it was a draw…
        console.log("It was a draw"); // … let the user know
    } else { // else tell them who the winner was
        humanScore > computerScore ? console.log("You win 😊") : console.log("Computer wins 😢")
    }

}

playGame() // play the game