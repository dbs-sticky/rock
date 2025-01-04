// return a random string of: rock, paper, or scissors

function getComputerChoice() {
const options = ["rock", "paper", "scissors"]; //Create the array of possible options
const randomZeroToThree = Math.floor(Math.random()*3); // create a random number between 0 and 3
console.log(options[randomZeroToThree]); // log the result to the console
return options[randomZeroToThree]; // use the random number to access one of the 3 elements in the array, and return the result
}



function getHumanChoice() {
const humanChoice = prompt("enter an option i.e. rock, paper, or scissors");

    if (humanChoice == "rock" || humanChoice ==  "paper" || humanChoice ==  "scissors") {
        console.log(`Thank you, you have entered ${humanChoice}`);
        return humanChoice;
            } else {
            console.log("Not a valid entry, please try again");
        }

    

};

getComputerChoice();

getHumanChoice();
