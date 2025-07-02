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
        choice = "Rock";
    } else if (num > 0.33) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    return choice;
}

// Play functions

function playRound() {
    let computerChoice = getComputerChoice();
    let winner = "";

    switch(playerChoice) {
        case "Rock":
            if (computerChoice === "Rock") {
                winner = "tie";
            } else if (computerChoice === "Paper") {
                winner = "computer";
            } else { // Scissors
                winner = "player";
            }
            break;
        
        case "Paper":
            if (computerChoice === "Rock") {
                winner = "player";
            } else if (computerChoice === "Paper") {
                winner = "tie";
            } else { // Scissors
                winner = "computer";
            }
            break;

        case "Scissors":
            if (computerChoice === "Rock") {
                winner = "computer";
            } else if (computerChoice === "Paper") {
                winner = "player";
            } else { // Scissors
                winner = "tie";
            }
            break;
    }

    displayRoundInfo(winner, computerChoice);
    displayTotalStatistics();
}

function displayRoundInfo(roundWinner, computerChoice) {
    // Print who won this round
    
    if (roundWinner === "player") {
        roundStats.innerText = `Player wins! ${playerChoice} beats ${computerChoice}!`;
        playerScore++;
    } else if (roundWinner === "computer") {
        roundStats.innerText = `Computer wins! ${computerChoice} beats ${playerChoice}!`;
        computerScore++;
    } else { // tie
        roundStats.innerText = `Tie! Player chose ${playerChoice} and computer chose ${computerChoice}!`;
        tieScore++;
    }
}

function displayTotalStatistics() {
    // Print statistics
    totalStats.innerText = 
    `Player wins: ${playerScore}
    Ties: ${tieScore}
    Computer Wins: ${computerScore}`;
}

// Event handling the buttons
// const buttons = document.querySelectorAll(".button-container button"); // Doing all at once, plan to work on this later
const rockbtn = document.querySelector("#rockbtn");
const paperbtn = document.querySelector("#paperbtn");
const scissorsbtn = document.querySelector("#scissorsbtn");

rockbtn.addEventListener("click", () => {
    playerChoice = "Rock";
    playRound();
});

paperbtn.addEventListener("click", () => {
    playerChoice = "Paper";
    playRound();
});

scissorsbtn.addEventListener("click", () => {
    playerChoice = "Scissors";
    playRound();
});

// Getting document information for the statistics variables that need to be updated per round
const roundStats = document.querySelector("#round-stats");
const totalStats = document.querySelector("#total-stats");