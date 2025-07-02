// Scores
let playerScore = 0;
let tieScore = 0;
let computerScore = 0;

// Player choice (moved so it can be set by buttons)
let playerChoice = "";

// getChoice functions
function getComputerChoice() {
    let num = Math.random();
    
    let choice;
    // This isn't a perfect 1/3 split for each choice but it is close enough
    if (num > 0.66) {
        choice = "rock";
    } else if (num > 0.33) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

// Play functions

function playRound() {
    let computerChoice = getComputerChoice();

    let winner = "";

    switch(playerChoice) {
        case "rock":
            if (computerChoice === "rock") {
                winner = "tie";
            } else if (computerChoice === "paper") {
                winner = "computer";
            } else { // scissors
                winner = "player";
            }
            break;
        
        case "paper":
            if (computerChoice === "rock") {
                winner = "player";
            } else if (computerChoice === "paper") {
                winner = "tie";
            } else { // scissors
                winner = "computer";
            }
            break;

        case "scissors":
            if (computerChoice === "rock") {
                winner = "computer";
            } else if (computerChoice === "paper") {
                winner = "player";
            } else { // scissors
                winner = "tie";
            }
            break;
    }

    printWinnerInfo(winner, computerChoice);
    printWinnerStatistics();
}

function printWinnerInfo(roundWinner, computerChoice) {
    // Print who won this round
    if (roundWinner === "player") {
        console.log(`Player wins! ${playerChoice} beats ${computerChoice}!`);
        playerScore++;
    } else if (roundWinner === "computer") {
        console.log(`Computer wins! ${computerChoice} beats ${playerChoice}!`);
        computerScore++;
    } else { // tie
        console.log(`Tie! Player chose ${playerChoice} and computer chose ${computerChoice}!`);
        tieScore++;
    }
}

function printWinnerStatistics() {
    // Print statistics
    console.log(`  Player wins: ${playerScore}`);
    console.log(`         Ties: ${tieScore}`);
    console.log(`Computer Wins: ${computerScore}`);
    console.log("");
}

// Event handling the buttons
// const buttons = document.querySelectorAll(".button-container button"); // Doing all at once, plan to work on this later
const rockbtn = document.querySelector("#rockbtn");
const paperbtn = document.querySelector("#paperbtn");
const scissorsbtn = document.querySelector("#scissorsbtn");

rockbtn.addEventListener("click", () => {
    playerChoice = "rock";
    playRound();
});

paperbtn.addEventListener("click", () => {
    playerChoice = "paper";
    playRound();
});

scissorsbtn.addEventListener("click", () => {
    playerChoice = "scissors";
    playRound();
});