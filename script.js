
let humanScore = 0; // set starting human score to zero
let computerScore = 0; // set starting computer score to zero

const scoreBoard = document.querySelector("#scores");

function getComputerChoice() { // get the computer choice
    const options = ["rock", "paper", "scissors"]; //Create the array of possible options
    const randomZeroToThree = Math.floor(Math.random() * 3); // create a random integer between 0 and 3
    const computerChoose = options[randomZeroToThree]; // use the integer to pick a value from the array

    //create a new paragraph, and append to scoreboard
    const para = document.createElement("p");
    const score = scoreBoard.appendChild(para);
    score.textContent = `The computer selected: ${computerChoose}`;
    return computerChoose; // return the result i.e. rock, paper, or scissors
}


let roundCount = 0;

function playRound(humanSelect) { // function to play a single round, include rock, paper, scissors logic

    if (roundCount >= 5) {
        const para = document.createElement("p");
        const score = scoreBoard.appendChild(para);
        score.textContent = "Game over! No more rounds can be played.";
        return;
    };

    const computerSelect = getComputerChoice();

    if (humanSelect === computerSelect) { // the case when it's a draw
        //create a new paragraph, and append to scoreboard
        const para = document.createElement("p");
        const score = scoreBoard.appendChild(para);
        score.textContent =`You also selected: ${humanSelect} It was a draw. Human: ${humanScore} Computer: ${computerScore}`;
    } else if ( // the 3 cases where the human wins
        (humanSelect === "rock" && computerSelect === "scissors") ||
        (humanSelect === "scissors" && computerSelect === "paper") ||
        (humanSelect === "paper" && computerSelect === "rock")
    ) {
        humanScore++; // iterate the human score
        const para = document.createElement("p");
        const score = scoreBoard.appendChild(para);
        score.textContent =`You selected: ${humanSelect} You win! Human: ${humanScore} Computer: ${computerScore}`;
    } else if ( // the case where the computer wins
        (computerSelect === "rock" && humanSelect === "scissors") ||
        (computerSelect === "scissors" && humanSelect === "paper") ||
        (computerSelect === "paper" && humanSelect === "rock")
    ) {
        computerScore++; // iterate the computer score
        const para = document.createElement("p");
        const score = scoreBoard.appendChild(para);
        score.textContent =`You selected: ${humanSelect} You lose! Human: ${humanScore} Computer: ${computerScore}`;
    } else {
        console.log("Error"); // if none of the cases above are met, log "error" to the console
    };

    roundCount++;
    if (roundCount === 5) {
        const para = document.createElement("p");
        const score = scoreBoard.appendChild(para);
        score.textContent = "Game over!"; // let the user know the game has ended
        if (humanScore == computerScore) { // if it was a draw…
             score.textContent = "It was a draw"; // … let the user know
        } else { // else tell them who the winner was
            humanScore > computerScore ?  score.textContent = "You win 😊" :  score.textContent = "Computer wins 😢";
        }
    };
}

// add event listeners to the 3 buttons i.e. rock, paper, and scissors
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => playRound(button.id));
});
